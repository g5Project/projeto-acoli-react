import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/estaticos/navbar/Navbar";
import Footer from "./components/estaticos/footer/Footer";
import CadastroUsuario from "./paginas/cadastroUsuario/CadastroUsuario";
import Home from "./paginas/home/Home";
import Login from "./paginas/login/Login";
import CadastroTema from "./components/temas/cadastroTema/CadastroTema";
import ListaTema from "./components/temas/listaTema/ListaTema";
import DeletarTema from "./components/temas/deletarTema/DeletarTema";
import ListaPostagem from "./components/postagens/listaPostagens/ListaPostagem";
import DeletarPostagem from "./components/postagens/deletarPostagem/DeletarPostagem";
import CadastroPost from "./components/postagens/cadastroPost/CadastroPost";
import "./App.css";
import Sidebar from "./components/estaticos/sidebar/Sidebar";
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import Rightbar from "./components/estaticos/rightbar/Rightbar";

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <BrowserRouter>
    <ThemeProvider theme={darkTheme}></ThemeProvider>
    <Box></Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
      <Sidebar {...setMode} {...setMode}/>
      <div style={{ minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastroUsuario" element={<CadastroUsuario />} />

          <Route path="/temas" element={<ListaTema />} />
          <Route path="/posts" element={<ListaPostagem />} />

          <Route path="/formularioPostagem" element={<CadastroPost />} />
          <Route path="/formularioPostagem/:id" element={<CadastroPost />} />
          <Route path="/formularioTema" element={<CadastroTema />} />
          <Route path="/formularioTema/:id" element={<CadastroTema />} />

          <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
          <Route path="/deletarTema/:id" element={<DeletarTema />} />
        </Routes>
      </div>
      <Rightbar />
      </Stack>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
