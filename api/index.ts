import { createApp } from "../server/_core/app";
import { serveStatic } from "../server/_core/vite";

const app = createApp();
serveStatic(app);

// Vercel serverless handler
export default app;
