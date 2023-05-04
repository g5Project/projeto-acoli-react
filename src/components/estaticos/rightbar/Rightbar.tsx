import React from 'react'
import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import useLocalStorage from 'react-use-localstorage'
import { useSelector } from 'react-redux'

import { TokenState } from '../../../store/tokens/tokenReducer'

import './Rightbar.css'

const Rightbar = () => {
  const token = useSelector<TokenState, TokenState['tokens']>(
    state => state.tokens
  )
  let navigate = useNavigate()

  var rightbarComponent

  if (token != '') {
    rightbarComponent = (
      <Box
        flex={1}
        p={5}
        sx={{ display: { xs: 'none', sm: 'block' } }}
        style={{ background: 'white' }}
      >
        <Box position="relative" width={300}>
          <Typography variant="h6" fontWeight={100} paddingBottom={2}>
            Amigos Parceiros
          </Typography>
          <AvatarGroup max={5}>
            <Avatar
              alt="Amigos do Bem"
              src="https://d3p2amk7tvag7f.cloudfront.net/brands/265749b3e5e35289aaca862ca9e4d2ba68d85639.png"
            />
            <Avatar alt="Ipred" src="" />
            <Avatar alt="Amigos do Bem" src="" />
            <Avatar alt="Amigos do Bem" src="" />
            <Avatar alt="Amigos do Bem" src="" />
          </AvatarGroup>
          <Typography
            variant="h6"
            fontWeight={100}
            mt={2}
            mb={2}
            paddingTop={2}
          >
            Veja também
          </Typography>
          <ImageList cols={3} rowHeight={100} gap={5}>
            <ImageListItem>
              <img
                src="https://img.freepik.com/free-photo/man-taking-care-his-farm-close-up_23-2148580028.jpg?w=900&t=st=1683131650~exp=1683132250~hmac=10b1f11da91237ba0ff87b3340b04c94112e8f985eb72c3dfc0c2027ddddbacf"
                alt=""
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src="https://img.freepik.com/free-photo/senior-hardworking-farmer-agronomist-soybean-field-checking-crops-before-harvest_342744-1260.jpg?w=1060&t=st=1683131658~exp=1683132258~hmac=489cdd74c0ab9af3f5e4d3eb068f773adc800f34f338e0de5bf1ede1cefdb4df"
                alt=""
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src="https://img.freepik.com/free-photo/close-up-box-with-ripe-vegetables_329181-4612.jpg?w=1060&t=st=1683131815~exp=1683132415~hmac=e1c663fe562d3bf377f371318dd6780647c727b922395e514e3946bdc848bffb"
                alt=""
              />
            </ImageListItem>
          </ImageList>
          <Typography variant="h6" fontWeight={100} mt={2} paddingTop={3}>
            Mensagens
          </Typography>
          <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          >
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Luiz Guerreiro"
                  src="https://i.ibb.co/jbfk9Y3/luiz.png"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Luis Guerreiro"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Luis Guerreiro
                    </Typography>
                    {' — Estou aprendendo tanto aqui que...'}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Yuri Oliveira"
                  src="https://avatars.githubusercontent.com/u/62682253?v=4"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Yuri Oliveira"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      para Grupo 5
                    </Typography>
                    {
                      ' — Gente, voces se superaram nessa, vou te contar viu...Parabens!'
                    }
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Genadro" src="/static/images/avatar/3.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Geandro"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    ></Typography>
                    {
                      ' — Esse site entra para os meus top 3 melhoes sites, sinceramente...'
                    }
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </Box>
      </Box>
    )
  }

  return <>{rightbarComponent}</>
}

export default Rightbar
