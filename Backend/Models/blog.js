import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
    {
        blogAuthor : {
            type : String,
            required : true
        },

        blogTitle : {
            type : String,
            required : true
        },

        blogContent : {
            type : String,
            required : true
        },
    },
    {
        timestamps : true
    }
);

export const Blog = mongoose.model("blog", blogSchema);