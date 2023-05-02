import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Grid,
} from "@material-ui/core";
import Tema from "../../../models/Tema";
import { Box } from "@mui/material";
import "./ListaTema.css";
import useLocalStorage from "react-use-localstorage";
import { busca } from "../../../services/Service";

function ListaTema() {
  const [temas, setTemas] = useState<Tema[]>([]);

  const [token, setToken] = useLocalStorage("token");

  let navigate = useNavigate();

  useEffect(() => {
    if (token === "") {
      alert(
        "Você precisa estar logado para ter acesso! Para prosseguir, faça o login"
      );
      navigate("/login");
    }
  }, [token]);

  async function getTema() {
    await busca(`/temas`, setTemas, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    getTema();
  }, [temas.length]);

  return (
    <>
      {temas.map((tema) => (
        <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="container-principal-home"
      >
        <Box m={2}>
          <Card variant="outlined">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                {tema.nome}
              </Typography>
              <Typography variant="h5" component="h2">
                {tema.descricao}
              </Typography>
            </CardContent>
            <CardActions>
              <Box display="flex" justifyContent="center" mb={1.5}>
                <Link
                  to={`/formularioTema/${tema.id}`}
                  className="text-decorator-none"
                >
                  <Box mx={1}>
                    <Button
                      variant="contained"
                      className="marginLeft"
                      size="small"
                      color="primary"
                    >
                      atualizar
                    </Button>
                  </Box>
                </Link>
                <Link
                  to={`/deletarTema/${tema.id}`}
                  className="text-decorator-none"
                >
                  <Box mx={1}>
                    <Button variant="contained" size="small" color="secondary">
                      deletar
                    </Button>
                  </Box>
                </Link>
              </Box>
            </CardActions>
          </Card>
        </Box>
        </Grid>
      ))}
    </>
  );
}

export default ListaTema;
