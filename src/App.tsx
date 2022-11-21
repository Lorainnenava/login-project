import "./App.css";
import Index from "./components/index";
import Entrada from "./components/entrada";
import Admi from "./components/Admi";
import Empresa1 from "./components/empresas/Empresa1";
import Empresa2 from "./components/empresas/Empresa2";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/Entrada/:user" element={<Entrada />} />
          <Route path="/Administrador" element={<Admi />} />
          <Route path="/Empresa/Empresa1" element={<Empresa1 />} />
          <Route path="/Empresa/Empresa2" element={<Empresa2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
