import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import Loading from "./Loading";
import Error from "./Error";
import style from "../Assets/Styling/blog.module.css";


const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const [isLoading, setIsLoading] = useState(true); // Start with isLoading as true
  const [error, setError] = useState(null);

  const getBlog = async (id) => {
    try {
      const response = await Axios.get(`http://localhost:5000/blog/${id}`);
      const blogData = response.data.blog; // Assuming the data is an array with a single blog entry
      setBlog(blogData);

      // Simulate a 10-second delay
      setTimeout(() => {
        setIsLoading(false); // Set isLoading to false after 10 seconds
      }, 4000); // 10000 milliseconds = 10 seconds
    } catch (error) {
      console.error("Error fetching blog:", error);
      setIsLoading(false);
      setError(error.message);
    }
  };

  const getTime =(time)=>{
    const createdAt = new Date(time);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    };
    const formattedCreatedAt = createdAt.toLocaleDateString("en-US", options);
    return formattedCreatedAt;
  }

  useEffect(() => {
    getBlog(id);
  }, [id]);

  return (
    <>    
        {
            isLoading ? <Loading /> : (
                error ? <Error error={error}/> :     
                <div className={style.blogContainer}>
                    <h1 className={style.title}>Title: {blog.blogTitle}</h1>
                    <h3 className={style.author}>Author: {blog.blogAuthor}</h3>
                    <h3>{getTime(blog.createdAt)}</h3>
                    <p className={style.content}>{blog.blogContent}</p>
              </div>
            )
        }
    </>

  )
}

export default Blog;
