import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardActions, CardContent, Button, Typography } from "@material-ui/core";
import { Avatar, Box, CardHeader, CardMedia, Checkbox, IconButton } from "@mui/material";
import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { TokenState } from "../../../store/tokens/tokenReducer";
import Postagem from "../../../models/Postagem";
import { busca } from "../../../services/Service";

import "./ListaPostagem.css";

function ListaPostagem() {
  const [posts, setPosts] = useState<Postagem[]>([]);
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  let navigate = useNavigate();

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

  async function getPost() {
    await busca("/postagens", setPosts, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    getPost();
  }, [posts.length]);

  return (
    <>
      {posts.map((post) => (
        <Card className="card">
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVert />
              </IconButton>
            }
            title="Rosangela Brito"
            subheader="02 de maio de 2023"
          />

          <CardContent>
            <CardContent>
              <Typography variant="h5" component="h2">
                {post.titulo}
              </Typography>
              <CardMedia
                component="img"
                height="15%"
                image="https://images.pexels.com/photos/1112080/pexels-photo-1112080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Agricultura Sustentável"
              />
              <Typography variant="body2" component="p">
                {post.descricao}
              </Typography>
              <Typography variant="body2" component="p">
                {post.tema?.descricao}
              </Typography>
            </CardContent>
          </CardContent>
          <CardActions disableSpacing>
            <Box display="flex" justifyContent="center" mb={1.5}>
              <Link to={`/formularioPostagem/${post.id}`}>
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
              <Link to={`/deletarPostagem/${post.id}`}>
                <Box mx={1}>
                  <Button variant="contained" size="small" color="secondary">
                    deletar
                  </Button>
                </Box>
              </Link>
            </Box>

            <IconButton aria-label="add to favorites">
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite sx={{ color: "red" }} />}
              />
            </IconButton>
            <IconButton aria-label="share">
              <Share />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </>
  );
}

export default ListaPostagem;
