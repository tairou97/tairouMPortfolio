import Home from "../../pages/home/Home";
import Work from "../../pages/work/Work";
import About from "../../pages/about/About";
import Skills from "../../pages/skills/Skills";
import Contact from "../../pages/contact/Contact";
import { Routes, Route } from "react-router-dom";

const routes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default routes;
