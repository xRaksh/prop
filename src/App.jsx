import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./pages/Home";
import About from "./pages/About";

function App() {

  return (
    <>
      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<S1 />} />
        <Route path="about" element={<S2 />} />
      </Routes>
      </BrowserRouter> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
