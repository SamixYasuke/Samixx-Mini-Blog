import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import CreateBlog from "./Pages/CreateBlog";
import Nav from "./Templates/Nav";
import Blog from "./Components/Blog";

const App = () => {
  return (
    <Router>
      <>
        <Nav />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/createblog" element={ <CreateBlog /> } />
          <Route path="/blog/:id" element={ <Blog /> } />
        </Routes>
      </>
    </Router>
  );
};

export default App;
