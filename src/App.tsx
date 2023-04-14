import { useState } from "react";
import Navbar from "./components/estaticos/navbar/Navbar";
import Home from "./paginas/home/Home";
import Footer from "./components/estaticos/footer/Footer";
import Login from "./paginas/login/Login"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ minHeight: "100vh" }}>
        <Routes>
          {" "}
          // Antigo Switch
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/cadastro" element={<CadastroUsuario />} /> */}
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
