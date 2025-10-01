import serverless from "serverless-http";
import app from "../server/index";

// Wrap the Express app with serverless-http
const handler = serverless(app);

// Vercel expects a default export
export default handler;

