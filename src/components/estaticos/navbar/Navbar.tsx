import React, { useState } from 'react'
import { Mail, Notifications } from '@mui/icons-material'
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  alpha,
  Typography
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

import { TokenState } from '../../../store/tokens/tokenReducer'
import { useNavigate } from 'react-router-dom'
import { addToken } from '../../../store/tokens/actions'

import './Navbar.css'

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch'
    }
  }
}))

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  color: 'white',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.2),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },

  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto'
  }
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  background: 'linear-gradient(45deg, #00214f 0%, #259887 100%)'
})

const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  alignItems: 'center',
  color: 'white',
  gap: '20px',
  [theme.breakpoints.up('sm')]: {
    display: 'flex'
  }
}))

const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  [theme.breakpoints.up('sm')]: {
    display: 'none'
  }
}))

function Navbar() {
  const [open, setOpen] = useState(false)
  const token = useSelector<TokenState, TokenState['tokens']>(
    state => state.tokens
  )
  let navigate = useNavigate()
  const dispatch = useDispatch()

  function goLogout() {
    dispatch(addToken(''))
    toast.info('Usuário deslogado', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: 'colored'
    })
    navigate('/login')
  }

  var navbarComponent
  if (token != '') {
    navbarComponent = (
      <AppBar position="sticky" className="navbar-container">
        <StyledToolbar>
          <a href="/home">
            <img
              className="nav-logo"
              src="https://svgshare.com/i/soQ.svg"
              alt="Logo"
              height={'40'}
            />
          </a>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Pesquisar"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Icons>
            <Badge badgeContent={4} color="error">
              <Mail />
            </Badge>
            <Badge badgeContent={2} color="error">
              <Notifications />
            </Badge>
            <Avatar
              sx={{ width: 30, height: 30 }}
              src="./src/assets/user.svg"
              onClick={e => setOpen(true)}
            />
          </Icons>
          <UserBox onClick={e => setOpen(true)}>
            <Avatar
              sx={{ width: 30, height: 30 }}
              src="./src/assets/user.svg"
            />
            <Typography>Rosangela</Typography>
          </UserBox>
        </StyledToolbar>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={e => setOpen(false)}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
        >
          <MenuItem>Perfil</MenuItem>
          <MenuItem>Minha Conta</MenuItem>
          <MenuItem onClick={goLogout}>Sair</MenuItem>
        </Menu>
      </AppBar>
    )
  }

  return <>{navbarComponent}</>
}
export default Navbar
