import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import About from "../src/pages/About/About";
import "./App.css";
import ContactUs from "./pages/ContactUs/ContactUs";
import Documentaries from "./pages/Documentaries/Documentaries";
import Movies from "../src/pages/Movies/Movies";
import Series from "./pages/Series/Series";
import Yawaskits from "./pages/YawaSkits/Yawaskits";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/documentaries" element={<Documentaries />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/yawaskits" element={<Yawaskits />} />
      </Routes>
    </Router>
  );
}

export default App;
