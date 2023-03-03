import express from 'express';
const app = express();
import cors from 'cors';
import dotenv from 'dotenv';
import multer from "multer";
import cookieParser from "cookie-parser";
import authRoutes from './routes/auth.js';
// import userRoutes from './routes/users.js';
// import postRoutes from './routes/posts.js';
// import commentRoutes from './routes/comments.js';
// import likeRoutes from './routes/likes.js';

//Use .env file
dotenv.config({ path: "./config/.env" });

app.use(cors());

app.use(cookieParser());

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/auth", authRoutes);
// app.use("/api/users", userRoutes);
// app.use("/api/posts", postRoutes);
// app.use("/api/comments", commentRoutes);
// app.use("/api/likes", likeRoutes);


//Server Running
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}, you better catch it!`);
});