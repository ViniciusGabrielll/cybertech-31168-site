import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./containers/Home/home.tsx";
import "./main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/navBar.tsx";
import Sobre from "./containers/Sobre/sobre.tsx";
import Footer from "./components/Footer/footer.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </BrowserRouter>
    <Footer/>
  </StrictMode>
);
