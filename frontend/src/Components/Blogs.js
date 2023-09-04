import { useState } from "react";
import style from "../Assets/Styling/blogs.module.css";

const Blogs = ({ blogs }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  // Sort blogs by createdAt in descending order
  const sortedBlogs = [...blogs].sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = sortedBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const limitText = (text) => {
    if (text.length <= 30) {
      return text;
    } else {
      return text.substring(0, 200) + " ...";
    }
  };

  return (
    <main className={style.blogContainer}>
      <div className={style.blogs}>
        {currentBlogs.map((blog) => (
          <a href={`/blog/${blog._id}`} key={blog._id}>
            <h2>Title: {blog.blogTitle} </h2>
            <h4>Written By {blog.blogAuthor}</h4>
            <p className={style.content}>{limitText(blog.blogContent)}</p>
          </a>
        ))}
      </div>

      {/* Pagination controls */}
      <div className={style.pagination}>
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={indexOfLastBlog >= sortedBlogs.length}
        >
          Next
        </button>
      </div>
    </main>
  );
};

export default Blogs;