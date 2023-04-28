import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import { Box } from "@mui/material";
import "./Navbar.css";

function Navbar() {
  const [token, setToken] = useLocalStorage("token");
  let navigate = useNavigate();

  function goLogout() {
    setToken("");
    alert("Usuário deslogado");
    navigate("/login");
  }

  return (
    <>
    <div className="navbar">
      <AppBar className="bg-menu">
        <Toolbar variant="dense" className="container-menu">
          <Box style={{ cursor: "pointer" }}>
            <a href="/home">
             <img className="menu-logo" src="./src/assets/logoAcoli.svg" alt="Logo" />
            </a>
          </Box>

          <div>
            <Box className="menu-links" display="flex">
              <Link to="/home" className="link-home">
                <Box className="menu-item" mx={2}>
                  <Typography variant="h6" color="inherit">
                    home
                  </Typography>
                </Box>
              </Link>

              {/* link do posts */}
              <Box className="menu-item" mx={2}>
                <Typography variant="h6" color="inherit">
                  postagens
                </Typography>
              </Box>

              <Link to="/temas">
                <Box className="menu-item" mx={2}>
                  <Typography variant="h6" color="inherit">
                    temas
                  </Typography>
                </Box>
              </Link>

              <Link to="/formularioTema">
                <Box className="menu-item" mx={2}>
                  <Typography variant="h6" color="inherit">
                    cadastrar tema
                  </Typography>
                </Box>
              </Link>

              <Link to="/login" className="link-logout">
                <Box className="menu-item" mx={2}>
                  <Typography variant="h6" color="inherit" onClick={goLogout}>
                    logout
                  </Typography>
                </Box>
              </Link>
            </Box>
          </div>
        </Toolbar>
      </AppBar>
      </div>
    </>
  );
}
export default Navbar;
