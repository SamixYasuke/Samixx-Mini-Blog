import { useEffect, useState } from "react";
import Axios from "axios";
import Blogs from "../Components/Blogs";
import Loading from "../Components/Loading";
import Error from "../Components/Error";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); // State variable to store error message

  const getBlogs = async () => {
    setIsLoading(true);
    try {
      const response = await Axios.get("http://localhost:5000/blogs");
      const blogData = response.data;
      console.log(blogData.blogs);
      setBlogs(blogData.blogs);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
      setError(error.message); // Set the error message state variable
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getBlogs();
  }, [])

  return(
    <>
      {
        isLoading ? <Loading/> : (
          error ? <Error error={error} /> : <Blogs blogs={blogs}/>
        )
      }
    </>
  )
}

export default Home;
