import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, protectedProcedure } from "./_core/trpc";
import { z } from "zod";
import { createLead, getAllLeads, getLeadById, updateLeadStatus, createFileUpload, getFilesByLeadId } from "./db";
import { storagePut } from "./storage";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  leads: router({
    /**
     * Submit a new lead from a form (public endpoint)
     */
    submit: publicProcedure
      .input(
        z.object({
          name: z.string().min(1, "Name is required"),
          email: z.string().email("Valid email is required"),
          phone: z.string().optional(),
          service: z.string().optional(),
          message: z.string().optional(),
          source: z.enum(["home", "contact"]).optional(),
        })
      )
      .mutation(async ({ input }) => {
        const lead = await createLead({
          name: input.name,
          email: input.email,
          phone: input.phone || null,
          service: input.service || null,
          message: input.message || null,
          source: (input.source || "home") as "home" | "contact",
          status: "new",
        });
        return lead;
      }),

    /**
     * Get all leads (admin only)
     */
    list: protectedProcedure.query(async ({ ctx }) => {
      if (ctx.user?.role !== "admin") {
        throw new Error("Unauthorized: admin access required");
      }
      return await getAllLeads();
    }),

    /**
     * Get a single lead by ID (admin only)
     */
    getById: protectedProcedure
      .input(z.object({ id: z.number() }))
      .query(async ({ input, ctx }) => {
        if (ctx.user?.role !== "admin") {
          throw new Error("Unauthorized: admin access required");
        }
        return await getLeadById(input.id);
      }),

    /**
     * Update lead status (admin only)
     */
    updateStatus: protectedProcedure
      .input(
        z.object({
          id: z.number(),
          status: z.enum(["new", "contacted", "qualified", "lost"]),
        })
      )
      .mutation(async ({ input, ctx }) => {
        if (ctx.user?.role !== "admin") {
          throw new Error("Unauthorized: admin access required");
        }
        const success = await updateLeadStatus(input.id, input.status);
        return { success };
      }),
  }),

  files: router({
    /**
     * Upload a file to S3 and create a file upload record
     */
    upload: publicProcedure
      .input(
        z.object({
          fileName: z.string(),
          fileData: z.instanceof(Buffer),
          mimeType: z.string(),
          relatedLeadId: z.number().optional(),
        })
      )
      .mutation(async ({ input }) => {
        try {
          const fileKey = `uploads/${Date.now()}-${input.fileName}`;
          const { url } = await storagePut(fileKey, input.fileData, input.mimeType);

          const fileUpload = await createFileUpload({
            fileKey,
            fileName: input.fileName,
            fileUrl: url,
            mimeType: input.mimeType,
            fileSize: input.fileData.length,
            relatedLeadId: input.relatedLeadId || null,
          });

          return fileUpload;
        } catch (error) {
          console.error("File upload error:", error);
          throw error;
        }
      }),

    /**
     * Get files for a lead
     */
    getByLeadId: protectedProcedure
      .input(z.object({ leadId: z.number() }))
      .query(async ({ input, ctx }) => {
        if (ctx.user?.role !== "admin") {
          throw new Error("Unauthorized: admin access required");
        }
        return await getFilesByLeadId(input.leadId);
      }),
  }),
});

export type AppRouter = typeof appRouter;
