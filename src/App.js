import Home from "./Home";
import Nav from "./Nav";
import About from "./list/About";
import Contact from "./list/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./list/Projects";

function App() {
  return (
    <div>
      <div>
      <Nav/>
      </div>
      <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/projects" element={<Projects/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
