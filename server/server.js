import express from "express";

import dotenv from "dotenv";
import connectDatabase from "./config/MongoDB.js";
import ImportData from "./DataImport.js";
import productRoute from "./Routes/ProductRoutes.js";
import { errorHandler, notFound } from "./Middleware/Errors.js";
import userRouter from "./Routes/UserRoutes.js";
import orderRouter from "./Routes/orderRoutes.js";
import cors from "cors";

dotenv.config();
connectDatabase();

const app = express();
app.use(cors());
app.use(express.json());

//API
app.use("/api/import", ImportData);
app.use("/api/products", productRoute);
app.use("/api/male", productRoute);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);
app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});

//Error Handler
app.use(notFound);
app.use(errorHandler);

// // Load Product from server
// app.get("/api/products", (req, res) => {
//     res.json(productData.getProducts(8));
// });
// // Load All Product from server
// app.get("/api/catalog", (req, res) => {
//     res.json(productData.getAllProducts());
// });

const PORT = process.env.PORT || 5000;

app.listen(3000, console.log(`listening on port ${PORT}`));
