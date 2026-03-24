import { describe, expect, it, vi, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";
import { createLead } from "./db";

/**
 * Mock database functions for testing
 */
vi.mock("./db", () => ({
  createLead: vi.fn(async (lead) => ({
    id: 1,
    ...lead,
    createdAt: new Date(),
    updatedAt: new Date(),
  })),
  getAllLeads: vi.fn(async () => []),
  getLeadById: vi.fn(async () => null),
  updateLeadStatus: vi.fn(async () => true),
  createFileUpload: vi.fn(async () => null),
  getFilesByLeadId: vi.fn(async () => []),
}));

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };
}

describe("leads.submit", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("submits a lead with required fields", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.leads.submit({
      name: "John Doe",
      email: "john@example.com",
      source: "home",
    });

    expect(result).toBeDefined();
    expect(result?.name).toBe("John Doe");
    expect(result?.email).toBe("john@example.com");
    expect(result?.source).toBe("home");
    expect(result?.status).toBe("new");
  });

  it("submits a lead with all fields", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.leads.submit({
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "+971501234567",
      service: "meta-ads",
      message: "I need help with Meta Ads",
      source: "contact",
    });

    expect(result).toBeDefined();
    expect(result?.name).toBe("Jane Smith");
    expect(result?.email).toBe("jane@example.com");
    expect(result?.phone).toBe("+971501234567");
    expect(result?.service).toBe("meta-ads");
    expect(result?.message).toBe("I need help with Meta Ads");
    expect(result?.source).toBe("contact");
  });

  it("rejects invalid email", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    try {
      await caller.leads.submit({
        name: "Invalid Email",
        email: "not-an-email",
        source: "home",
      });
      expect.fail("Should have thrown validation error");
    } catch (error: any) {
      expect(error.message).toContain("Valid email is required");
    }
  });

  it("rejects empty name", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    try {
      await caller.leads.submit({
        name: "",
        email: "test@example.com",
        source: "home",
      });
      expect.fail("Should have thrown validation error");
    } catch (error: any) {
      expect(error.message).toContain("Name is required");
    }
  });

  it("defaults source to home when not provided", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.leads.submit({
      name: "Test User",
      email: "test@example.com",
    });

    expect(result?.source).toBe("home");
  });

  it("handles optional fields correctly", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.leads.submit({
      name: "Minimal Lead",
      email: "minimal@example.com",
      source: "home",
    });

    expect(result).toBeDefined();
    expect(result?.phone).toBeNull();
    expect(result?.service).toBeNull();
    expect(result?.message).toBeNull();
  });

  it("throws when lead persistence is unavailable", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    vi.mocked(createLead).mockResolvedValueOnce(null);

    await expect(
      caller.leads.submit({
        name: "Unavailable Lead",
        email: "offline@example.com",
        source: "home",
      })
    ).rejects.toThrow("Lead submission is temporarily unavailable");
  });
});
