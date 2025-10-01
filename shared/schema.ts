import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const coupleInquiries = pgTable("couple_inquiries", {
  id: varchar("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  names: text("names").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  weddingDate: text("wedding_date").notNull(),
  location: text("location").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const plannerInquiries = pgTable("planner_inquiries", {
  id: varchar("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  name: text("name").notNull(),
  company: text("company").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  service: text("service").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertUserSchema = createInsertSchema(users).omit({
  id: true,
});

export const insertCoupleInquirySchema = createInsertSchema(coupleInquiries).omit({
  id: true,
  createdAt: true,
}).extend({
  names: z.string().min(2, "Please enter both names"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  weddingDate: z.string().min(1, "Please select a wedding date"),
  location: z.string().min(2, "Please enter a location"),
  message: z.string().min(10, "Please share some details about your wedding"),
});

export const insertPlannerInquirySchema = createInsertSchema(plannerInquiries).omit({
  id: true,
  createdAt: true,
}).extend({
  name: z.string().min(2, "Please enter your name"),
  company: z.string().min(2, "Please enter your company name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  service: z.enum(["photography", "videography", "both"], {
    required_error: "Please select a service type",
  }),
  message: z.string().min(10, "Please provide project details"),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertCoupleInquiry = z.infer<typeof insertCoupleInquirySchema>;
export type CoupleInquiry = typeof coupleInquiries.$inferSelect;
export type InsertPlannerInquiry = z.infer<typeof insertPlannerInquirySchema>;
export type PlannerInquiry = typeof plannerInquiries.$inferSelect;
