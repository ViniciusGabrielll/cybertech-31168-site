import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./containers/Home/home.tsx";
import "./main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/navBar.tsx";
import Sobre from "./containers/Sobre/sobre.tsx";
import Footer from "./components/Footer/footer.tsx";
import IntoTheDeep from "./containers/Temporadas/IntoTheDeep/intoTheDeep.tsx";
import Contato from "./containers/Contato/contato.tsx";
import ScrollToTop from "./components/ScrollToTop/scrolToTop.tsx";
import Decode from "./containers/Temporadas/Decode/decode.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/temporadas/intoTheDeep" element={<IntoTheDeep />} />
        <Route path="/temporadas/decode" element={<Decode />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
);
