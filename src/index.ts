import connectDB from "./config/mongo";

const startServer = async () => {
  try {
    await connectDB();
    console.log("Server started successfully!");
    // Start your server logic here
  } catch (error) {
    console.error("Error starting server:", error);
  }
};

startServer();
