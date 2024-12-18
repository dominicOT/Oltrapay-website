import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/index";
import AboutUs from "./pages/About";
import Contact from "./pages/Contact";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
