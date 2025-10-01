import { 
  type User, 
  type InsertUser,
  type CoupleInquiry,
  type InsertCoupleInquiry,
  type PlannerInquiry,
  type InsertPlannerInquiry 
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createCoupleInquiry(inquiry: InsertCoupleInquiry): Promise<CoupleInquiry>;
  getCoupleInquiries(): Promise<CoupleInquiry[]>;
  
  createPlannerInquiry(inquiry: InsertPlannerInquiry): Promise<PlannerInquiry>;
  getPlannerInquiries(): Promise<PlannerInquiry[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private coupleInquiries: Map<string, CoupleInquiry>;
  private plannerInquiries: Map<string, PlannerInquiry>;

  constructor() {
    this.users = new Map();
    this.coupleInquiries = new Map();
    this.plannerInquiries = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createCoupleInquiry(insertInquiry: InsertCoupleInquiry): Promise<CoupleInquiry> {
    const id = randomUUID();
    const inquiry: CoupleInquiry = {
      ...insertInquiry,
      id,
      createdAt: new Date(),
    };
    this.coupleInquiries.set(id, inquiry);
    return inquiry;
  }

  async getCoupleInquiries(): Promise<CoupleInquiry[]> {
    return Array.from(this.coupleInquiries.values());
  }

  async createPlannerInquiry(insertInquiry: InsertPlannerInquiry): Promise<PlannerInquiry> {
    const id = randomUUID();
    const inquiry: PlannerInquiry = {
      ...insertInquiry,
      id,
      createdAt: new Date(),
    };
    this.plannerInquiries.set(id, inquiry);
    return inquiry;
  }

  async getPlannerInquiries(): Promise<PlannerInquiry[]> {
    return Array.from(this.plannerInquiries.values());
  }
}

export const storage = new MemStorage();
