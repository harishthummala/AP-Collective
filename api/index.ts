import serverless from "serverless-http";
import app from "../server/index";

const handler = serverless(app);

// Vercel expects a default export
export default async (req: any, res: any) => handler(req, res);
