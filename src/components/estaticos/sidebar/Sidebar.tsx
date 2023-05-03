import React from "react";
import { AccountBox, Article, Group, Home, ModeNight, Person, Settings, Storefront } from "@mui/icons-material";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import { TokenState } from "../../../store/tokens/tokenReducer";
import { addToken } from "../../../store/tokens/actions";

import "./Sidebar.css";

function Sidebar() {
  let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  const dispatch = useDispatch();

  function goLogout() {
    dispatch(addToken(""));
    toast.info("Usuário deslogado", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "colored",
    });
    navigate("/login");
  }

  var sidebarComponent;

  if (token != "") {
    sidebarComponent = (
      <Box
        flex={1}
        p={2}
        sx={{ display: { xs: "none", sm: "block" } }}
        style={{ background: "white" }}
      >
        <Box position="relative">
          <List>
            <ListItem disablePadding>
              <Link to="/home" className="cor">
                <ListItemButton component="a">
                  <ListItemIcon>
                    <Home />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItemButton>
              </Link>
            </ListItem>

            <ListItem disablePadding>
              <Link to="/posts" className="cor">
                <ListItemButton component="a">
                  <ListItemIcon>
                    <Article />
                  </ListItemIcon>
                  <ListItemText primary="Postagens" />
                </ListItemButton>
              </Link>
            </ListItem>

            <ListItem disablePadding>
              <Link to="/temas" className="cor">
                <ListItemButton component="a">
                  <ListItemIcon>
                    <Group />
                  </ListItemIcon>
                  <ListItemText primary="Temas" />
                </ListItemButton>
              </Link>
            </ListItem>

            <ListItem disablePadding>
              <Link to="/formularioTema" className="cor">
                <ListItemButton component="a" href="/formularioTema">
                  <ListItemIcon>
                    <Storefront />
                  </ListItemIcon>
                  <ListItemText primary="Cadastrar Tema" />
                </ListItemButton>
              </Link>
            </ListItem>

            <ListItem disablePadding>
              <Link to="/formularioPostagem" className="cor">
                <ListItemButton component="a" href="/formularioPostagem">
                  <ListItemIcon>
                    <Person />
                  </ListItemIcon>
                  <ListItemText primary="Criar Post" />
                </ListItemButton>
              </Link>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemIcon>
                  <Settings />
                </ListItemIcon>
                <ListItemText primary="Configurações" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <Link to="/login" className="cor">
                <ListItemButton component="a" href="/login" onClick={goLogout}>
                  <ListItemIcon>
                    <AccountBox />
                  </ListItemIcon>
                  <ListItemText primary="Sair" />
                </ListItemButton>
              </Link>
            </ListItem>
          </List>
        </Box>
      </Box>
    );
  }

  return <>{sidebarComponent}</>;
}

export default Sidebar;
