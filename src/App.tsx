import { BrowserRouter, Routes, Route } from "react-router-dom"; // routing
import Header from "./components/header";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Calculate from "./pages/calculate";

function App() {
  return (
    <BrowserRouter> {/* enables navigation between pages */}
      <Header /> {/* shows on every page */}
      <Routes> {/* decides which page to render based on the URL */}
        <Route path="/" element={<Home />} />  {/* Home page */}
        <Route path="/about" element={<About/>} />   {/* About page*/}
        <Route path="/contact" element={<Contact/>} />   {/* Contact page*/}
        <Route path="/calculate" element={<Calculate />} />   {/* Calculate page */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
