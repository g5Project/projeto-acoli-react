import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import { Box } from "@mui/material";
import "./Navbar.css";

function Navbar() {
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
        <AppBar className="bg-menu">
          <Toolbar variant="dense" className="container-menu">
            <Box style={{ cursor: "pointer" }}>
              <Typography variant="h5" color="inherit">
                Acoli
              </Typography>
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
                <Box className="menu-item" mx={2}>
                  <Typography variant="h6" color="inherit">
                    postagens
                  </Typography>
                </Box>
                <Box className="menu-item" mx={2}>
                  <Typography variant="h6" color="inherit">
                    temas
                  </Typography>
                </Box>
                <Box className="menu-item" mx={2}>
                  <Typography variant="h6" color="inherit">
                    cadastrar tema
                  </Typography>
                </Box>
                <Link to="/login" className="link-logout">
                  <Box className="menu-item" mx={2}>
                    <Typography variant="h6" color="inherit">
                      logout
                    </Typography>
                  </Box>
                </Link>
              </Box>
            </div>
          </Toolbar>
        </AppBar>
      </>
    );
  }
}
export default Navbar;
