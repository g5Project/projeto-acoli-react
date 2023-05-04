import React, { useEffect } from "react";
import { Typography, Grid, Button, Link } from "@material-ui/core";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import { TokenState } from "../../store/tokens/tokenReducer";
import TabPostagem from "../../components/postagens/tabPostagem/TabPostagem";
import ModalPostagem from "../../components/postagens/modalPostagem/ModalPostagem";

import "./Home.css";

function Home() {
  let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
    if (token == "") {
      toast.error("Você precisa estar logado", {
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
  }, [token]);

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        className="container-principal-home"
      >
        <Grid alignItems="center" item xs={6}>
          <Box>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              style={{ color: "#000851", fontWeight: "bold", fontSize: "2rem" }}
              className="titulo-banner"
            >
              Seja bem vindo(a)
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              component="h5"
              align="center"
              style={{ color: "#000851", fontWeight: "bold" }}
              className="subtitulo-banner"
            >
              à nossa rede de solidariedade!
            </Typography>

          </Box>

          <Box display="flex" alignItems="center" justifyContent="center">
              <a
                href="https://www.facebook.com/generationbrasil"
                target="_blank"
              >
                <FacebookIcon className="social-icon-home" />
              </a>
              <a
                href="https://www.instagram.com/generationbrasil/"
                target="_blank"
              >
                <InstagramIcon className="social-icon-home" />
              </a>
              <a
                href="https://www.linkedin.com/school/generationbrasil/"
                target="_blank"
              >
                <LinkedInIcon className="social-icon-home" />
              </a>
            </Box>
        </Grid>
      </Grid>
        <Grid xs={12} style={{ backgroundColor: "white" }}>
          <TabPostagem />
        </Grid>
    </>
  );
}
export default Home;
