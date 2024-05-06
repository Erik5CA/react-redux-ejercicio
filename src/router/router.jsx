import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Candidatos from "../components/Candidatos";
import { BrowserRouter } from "react-router-dom";

function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/candidatos" element={<Candidatos />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterApp;
