import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import CreateBlog from "./Pages/CreateBlog";
import Nav from "./Templates/Nav";
import Blog from "./Components/Blog";
import NotFound from "./Pages/NotFound";

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
          <Route path="*" element={ <NotFound /> }></Route>
        </Routes>
      </>
    </Router>
  );
};

export default App;
