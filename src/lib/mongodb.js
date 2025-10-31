import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    // Prevent multiple connections
    if (mongoose.connection.readyState === 1) {
      console.log(" MongoDB already connected");
      return;
    }

    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "test", // optional: can be your DB name
    });

    console.log(" MongoDB connected successfully");
  } catch (error) {
    console.error(" MongoDB connection failed:", error);
    throw new Error("MongoDB connection failed");
  }
};
