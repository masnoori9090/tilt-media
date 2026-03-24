import "dotenv/config";
import express from "express";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createApp } from "./server/_core/app";

const app = createApp();
const currentDir = path.dirname(fileURLToPath(import.meta.url));
const staticDir = fs.existsSync(path.resolve(currentDir, "dist"))
  ? path.resolve(currentDir, "dist")
  : path.resolve(currentDir, "public");

app.use(express.static(staticDir));

app.get("*", (req, res, next) => {
  if (req.path.startsWith("/api/")) {
    return next();
  }

  res.sendFile(path.join(staticDir, "index.html"));
});

export default app;
