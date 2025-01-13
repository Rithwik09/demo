import express from "express";
import { ApolloServer } from "apollo-server-express";
import mongoose from "mongoose";
import cors from 'cors';
import { typeDefs } from "./Schemas/schemas";
import { resolvers } from "./resolvers/userResolver";
import dotenv from "dotenv";
import connectDB from "./config/mongo";

dotenv.config();

const startServer = async () => {
  const app = express();

  // Configure CORS middleware
const corsOptions = {
  origin: 'https://studio.apollographql.com',  // Allow requests from Apollo Studio
  methods: ['POST', 'OPTIONS'],  // Allow POST and OPTIONS methods
  credentials: true,  // Allow credentials (cookies)
};

// Apply CORS middleware to the Express app
app.use(cors(corsOptions));

  // Connect to DB
  await connectDB();

  // Set up Apollo Server
  const server = new ApolloServer({
    typeDefs,
    resolvers: [resolvers], // Register resolver
  });

  await server.start();
  server.applyMiddleware({ app });

  app.listen(process.env.PORT, () => {
    console.log(`Server running on http://localhost:${process.env.PORT || 4000}`);
  });
};

startServer();
