import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertCoupleInquirySchema, insertPlannerInquirySchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Couple Inquiry Routes
  app.post("/api/inquiries/couple", async (req, res) => {
    try {
      const validatedData = insertCoupleInquirySchema.parse(req.body);
      const inquiry = await storage.createCoupleInquiry(validatedData);
      res.json(inquiry);
    } catch (error: any) {
      res.status(400).json({ message: error.message || "Invalid request data" });
    }
  });

  app.get("/api/inquiries/couple", async (_req, res) => {
    try {
      const inquiries = await storage.getCoupleInquiries();
      res.json(inquiries);
    } catch (error: any) {
      res.status(500).json({ message: error.message || "Failed to fetch inquiries" });
    }
  });

  // Planner Inquiry Routes
  app.post("/api/inquiries/planner", async (req, res) => {
    try {
      const validatedData = insertPlannerInquirySchema.parse(req.body);
      const inquiry = await storage.createPlannerInquiry(validatedData);
      res.json(inquiry);
    } catch (error: any) {
      res.status(400).json({ message: error.message || "Invalid request data" });
    }
  });

  app.get("/api/inquiries/planner", async (_req, res) => {
    try {
      const inquiries = await storage.getPlannerInquiries();
      res.json(inquiries);
    } catch (error: any) {
      res.status(500).json({ message: error.message || "Failed to fetch inquiries" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
