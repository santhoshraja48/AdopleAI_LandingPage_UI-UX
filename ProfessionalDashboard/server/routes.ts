import type { Express } from "express";
import { createServer, type Server } from "http";
import Stripe from "stripe";
import dotenv from "dotenv";
import { storage } from "./storage";

// Load environment variables at the top of routes
dotenv.config({ path: "./server/.env" });

// Get the Stripe secret key from environment variables
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

// Stripe initialized successfully

// Initialize Stripe with the secret key
if (!stripeSecretKey) {
  throw new Error("STRIPE_SECRET_KEY environment variable is required");
}

const stripe = new Stripe(stripeSecretKey, {
  apiVersion: "2025-06-30.basil",
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Stripe payment intent route
  app.post("/api/create-payment-intent", async (req, res) => {
    try {
      const { amount, currency = "usd" } = req.body;

      if (!amount || amount <= 0) {
        return res.status(400).json({ error: "Invalid amount" });
      }

      const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(amount * 100), // Convert to cents
        currency,
        automatic_payment_methods: {
          enabled: true,
        },
      });

      res.json({
        clientSecret: paymentIntent.client_secret,
      });
    } catch (error: any) {
      console.error("Error creating payment intent:", error);
      res.status(500).json({ error: error.message });
    }
  });

  // User registration route
  app.post("/api/register-user", async (req, res) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required" });
      }

      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ error: "Invalid email format" });
      }

      // Here you would typically:
      // 1. Check if user already exists
      // 2. Hash the password
      // 3. Store in database
      // For now, we'll just simulate success
      console.log(`User registration attempt: ${email}`);

      res.json({ 
        success: true, 
        message: "User registered successfully",
        userId: Math.random().toString(36).substr(2, 9) // Simulated user ID
      });
    } catch (error: any) {
      console.error("Error registering user:", error);
      res.status(500).json({ error: error.message });
    }
  });

  // Health check route
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  const httpServer = createServer(app);

  return httpServer;
}
