import React, { ChangeEvent, useEffect, useState } from "react";
import { Grid, TextField, Typography, Button } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import { login } from "../../services/Service";
import UserLogin from "../../models/UserLogin";
import "./Login.css";

function Login() {
  let history = useNavigate();

  const [token, setToken] = useLocalStorage("token");

  const [userLogin, setUserLogin] = useState<UserLogin>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
    token: "",
  });

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {
    if (token != "") {
      history("/home");
    }
  }, [token]);

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await login(`/usuarios/logar`, userLogin, setToken);

      alert("Usuário logado com sucesso!");
    } catch (error) {
      alert("Dados inálidos. Erro ao logar!");
    }
  }

  return (
    <>
      <Grid
        container
        className="container"
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <textPath className="text"></textPath>
        <Grid item className="container-form-login" alignItems="center" xs={4}>
          <Box className="container-inputs">
            <form onSubmit={onSubmit} className="aa">
              <Typography
                className="titulo-login"
                variant="h3"
                gutterBottom
                component="h3"
                align="center"
              >
                Login
              </Typography>
              <div className="container-inputs-usuario">
                <TextField
                  value={userLogin.usuario}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    updatedModel(e)
                  }
                  id="usuario"
                  label="usuário"
                  variant="outlined"
                  name="usuario"
                  margin="normal"
                  fullWidth
                />
              </div>
              <div className="container-inputs-senha">
                <TextField
                  value={userLogin.senha}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    updatedModel(e)
                  }
                  id="senha"
                  label="senha"
                  variant="outlined"
                  name="senha"
                  margin="normal"
                  type="password"
                  fullWidth
                />
              </div>

              <div className="s-btn-logar">
                <Box marginTop={2} textAlign="center">
                  <Button
                    className="btn-logar"
                    type="submit"
                    variant="contained"
                  >
                    Logar
                  </Button>
                </Box>
              </div>
            </form>

            <Box display="flex" justifyContent="center" marginTop={3}>
              <Box marginRight={1}>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  align="center"
                  className="legenda-login"
                >
                  Não tem uma conta?
                </Typography>
              </Box>

              <Link to="/cadastrousuario">
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  align="center"
                  className="legenda-cadastrar"
                >
                  Cadastre-se
                </Typography>
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Login;
