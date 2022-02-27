import express from "express";
import cors from "cors";
import dotenv from "dotenv";
const app = express();

dotenv.config();
app.use(cors());

import connectDB from "./config/db.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
connectDB();

import productRoutes from "./routes/productRoute.js";

app.use("/api/products", productRoutes);

app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
