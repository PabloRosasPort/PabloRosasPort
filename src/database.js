import mongoose from "mongoose";
const MONGO_URI = process.env.MONGO_URI;

// mongodb connection
mongoose.connect(MONGO_URI);
try {
  console.log("Connected to MongoDB Atlas");
} catch (error) {
  console.log(error);
}
