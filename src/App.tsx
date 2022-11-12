import "./App.css";
import Index from "./components/index";
import Entrada from "./components/entrada";
import Registro from "./components/registro";
import Empresa1 from "./components/empresas/Empresa1";
import Empresa2 from "./components/empresas/Empresa2";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Index" element={<Index />} />
          <Route path="/Entrada" element={<Entrada />} />
          <Route path="/Registro" element={<Registro />} />
          <Route path="/Empresa1" element={<Empresa1 />} />
          <Route path="/Empresa2" element={<Empresa2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
