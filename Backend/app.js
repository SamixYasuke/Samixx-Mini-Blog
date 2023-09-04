
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { Blog } from "./Models/blog.js";
import _ from "lodash";

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5000;

app.get("/blogs", async(req, res)=>{
    try {
        const blogs = await Blog.find({});
        res.status(200).json({
            numberOfBlogs : blogs.length,
            blogs : blogs
        });
    } catch (error) {
        res.status(404).json({
            message : "Couldn't Find Blog"
        });
    }
})

app.post("/blog", async(req, res)=>{
    try {
        const blogPost = new Blog({
            blogAuthor : req.body.blogAuthor,
            blogTitle : req.body.blogTitle,
            blogContent : req.body.blogContent
        });
        await blogPost.save();
        res.status(201).send("Blog Saved!");
    } catch (error) {
        res.status(500).json({
            message : "Couldn't save Blog"
        });
    }
});

app.get("/blog/:param", async (req, res) => {
    const { param } = req.params;
    try {
      let blog;
      if (mongoose.Types.ObjectId.isValid(param)) {
        blog = await Blog.findOne({ _id: param });
      } else {
        blog = await Blog.findOne({ blogTitle: param });
      }
      if (blog) {
        res.status(200).json({
          blog: blog,
        });;
      } else {
        res.status(404).json({
          message: "Blog Not Found!",
        });
      }
    } catch (error) {
      console.error(error.message);
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  });
  

const connectServer = async ()=>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/AnimeBlog");
        console.log("Connected to MongoDB");
        app.listen(PORT, ()=>{
            console.log(`This is active on Port ${PORT}`);
        });
    } catch (error) {
        console.error("Error connecting to database");
    }
}

connectServer();
