import { useState } from "react";
import style from "../Assets/Styling/form.module.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogAuthor, setBlogAuthor] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const navigate = useNavigate();

  const postBlog = async (e) => {
    e.preventDefault();

    if (blogTitle.trim() === "" || blogAuthor.trim() === "" || blogContent.trim() === "") {
      alert("Please fill in all fields");
    } else {
        try {
            await Axios.post("http://localhost:5000/blog", {
                blogAuthor,
                blogContent,
                blogTitle
            });
            setBlogTitle("");
            setBlogAuthor("");
            setBlogContent("");
            navigate("/");
        } catch (error) {
            alert("Couldn't post Blog!")
        }
    }
  };


  return (
    <form>
      <div className={style.inputContainer}>
        <input
          value={blogAuthor}
          onChange={(e) => setBlogAuthor(e.target.value)}
          placeholder="Enter Your Anime Anonymous name e.g@AnimeLover123"
        />
        <input
          value={blogTitle}
          onChange={(e) => setBlogTitle(e.target.value)}
          placeholder="Enter Your Blog Title"
        />
      </div>
      <div className={style.textAreaContainer}>
        <textarea
          value={blogContent}
          onChange={(e) => setBlogContent(e.target.value)}
          placeholder="Enter Your Article"
          rows="15"
          cols="30"
        ></textarea>
      </div>
      <div className={style.buttonContainer}>
        <button onClick={postBlog}>POST BLOG!</button>
      </div>
    </form>
  );
};

export default CreateBlog;
