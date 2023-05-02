import React from "react";
import { AccountBox, Article, Group, Home, ModeNight, Person, Settings, Storefront } from "@mui/icons-material";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material";
import useLocalStorage from "react-use-localstorage";
import { useNavigate } from "react-router-dom";

  function Sidebar() {

    const [token, setToken] = useLocalStorage("token");
    let navigate = useNavigate();

    var sidebarComponent

    if (token != "") {
        sidebarComponent = 
        <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block"} }} style={{background:"white"}}>
        <Box position="relative">

          <List>
            <ListItem disablePadding>
              <ListItemButton component="a" href="/home">
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="/posts">
                <ListItemIcon>
                  <Article />
                </ListItemIcon>
                <ListItemText primary="Postagens" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component="a" href="/temas">
                <ListItemIcon>
                  <Group />
                </ListItemIcon>
                <ListItemText primary="Temas" />
              </ListItemButton>
            </ListItem>


            <ListItem disablePadding>
              <ListItemButton component="a" href="/formularioTema">
                <ListItemIcon>
                  <Storefront />
                </ListItemIcon>
                <ListItemText primary="Cadastrar Tema" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="/formularioPostagem">
                <ListItemIcon>
                  <Person />
                </ListItemIcon>
                <ListItemText primary="Criar Post" />
              </ListItemButton>
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
              <ListItemButton component="a" href="/login">
                <ListItemIcon>
                  <AccountBox />
                </ListItemIcon>
                <ListItemText primary="Sair" />
              </ListItemButton>
            </ListItem>
            {/* <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemIcon>
                  <ModeNight />
                </ListItemIcon>
                <Switch onChange={e=>setMode(mode === "light" ? "dark" : "light")}/>
              </ListItemButton>
            </ListItem> */}
          </List>
        </Box>
      </Box>
    }

    return (
     <>{sidebarComponent}</>
    );
  };

  export default Sidebar;