import serverless from "serverless-http";
import app from "../server/index";

// Wrap the Express app with serverless-http
const handler = serverless(app);

// Export default for Vercel serverless function
export default async (req: any, res: any) => {
  try {
    await handler(req, res);
  } catch (err: any) {
    res.status(err.status || 500).json({ message: err.message || "Internal Server Error" });
  }
};
