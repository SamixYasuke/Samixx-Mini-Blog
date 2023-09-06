import { useState } from "react";
import style from "../Assets/Styling/form.module.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import resizeAndConvertToBase64 from "../Dependables/handleBase64Coversion";

const CreateBlog = () => {
  const [blogImage, setBlogImage] = useState("");
  const [blogTitle, setBlogTitle] = useState("");
  const [blogAuthor, setBlogAuthor] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) {
      setError("Please select a valid image file");
      return;
    }
  
    try {
      const base64String = await resizeAndConvertToBase64(file);
      setBlogImage(`data:image/jpeg;base64,${base64String}`);
      setError("");
    } catch (error) {
      setError("Error processing the image");
    }
  };
  
  
  const postBlog = async (e) => {
    e.preventDefault();

    if (!blogImage || !blogTitle || !blogAuthor || !blogContent) {
      setError("Please fill in all fields");
      return;
    }
    setLoading(true);

    try {
      await Axios.post("http://localhost:5000/blog", {
        blogImage,
        blogAuthor,
        blogContent,
        blogTitle,
      });
      setBlogTitle("");
      setBlogAuthor("");
      setBlogContent("");
      setBlogImage("");
      setLoading(false);
      navigate("/");
    } catch (error) {
      setError("Couldn't post Blog!");
      setLoading(false);
    }
  };

  return (
    <>
      <div className={style.imageContainer}>
        {blogImage && <img className={style.image} src={blogImage} alt={"k"} />}
      </div>
      {error && <div className={style.error}>{error}</div>}
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
          <div className={style.uploadContainer}>
          <input type="file" accept=".jpeg, .jpg, .png, .gif" onChange={handleImageUpload} />
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
          <button onClick={postBlog} disabled={loading}>
            {loading ? "Posting..." : "POST BLOG!"}
          </button>
        </div>
      </form>
    </>
  );
};

export default CreateBlog;
