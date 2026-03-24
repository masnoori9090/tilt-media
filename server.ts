import "dotenv/config";
import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createApp } from "./server/_core/app";

const app = createApp();
const currentDir = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.resolve(currentDir, "public");

// Vercel serves assets from public/** via CDN. The local static middleware
// keeps this entrypoint usable for local smoke tests too.
app.use(express.static(publicDir));

app.get("*", (req, res, next) => {
  if (req.path.startsWith("/api/")) {
    return next();
  }

  res.sendFile(path.join(publicDir, "index.html"));
});

export default app;
