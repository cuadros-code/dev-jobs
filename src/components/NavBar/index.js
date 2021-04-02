import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import PersonIcon from '@material-ui/icons/Person';
import { useStyles } from './styles';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase';
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'

export const NavBar = () => {

  const [user] = useAuthState(auth)
  const history = useHistory()

  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null)

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleLogOut = () => auth.signOut()
  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);
  const handleMobileMenuOpen = (event) => setMobileMoreAnchorEl(event.currentTarget);

  const redirectProfile = () => history.push('/profile/dashboard')


  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {
        user
          ?
          <div>
            <MenuItem
              onClick={redirectProfile}
            >
              <IconButton color="inherit">
                <Badge color="secondary">
                  <PersonIcon />
                </Badge>
              </IconButton>
              <p>{user?.displayName?.split(' ')[0]}</p>
            </MenuItem>
            <MenuItem
              onClick={handleLogOut}
            >
              <IconButton color="inherit">
                <Badge color="secondary">
                  <ExitToAppIcon />
                </Badge>
              </IconButton>
              <p>Cerrar Sesion</p>
            </MenuItem>
          </div>
          :
          <MenuItem>
            <IconButton color="inherit">
              <Badge color="secondary">
                <ExitToAppIcon />
              </Badge>
            </IconButton>
            <LinkSignInButton to="auth/login">
              <Button onClick={handleLogOut} color="inherit">Iniciar Sesion</Button>
            </LinkSignInButton>
          </MenuItem>
      }
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            <LinkHome
              to="/"
            >
              DevJobs
            </LinkHome>
          </Typography>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>

            {
              user
                ?
                <div
                >
                  <IconButton
                    onClick={redirectProfile}
                    color="inherit">
                    <Avatar src={user?.photoURL} />
                  </IconButton>
                  <Button onClick={handleLogOut} color="inherit">Cerrar Sesion</Button>
                </div>
                :
                <LinkSignInButton to="auth/login">
                  <Button color="inherit">Iniciar Sesion</Button>
                </LinkSignInButton>
            }
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}

const LinkSignInButton = styled(Link)`
  text-decoration: none;
  color: #fff;
  @media (max-width: 600px){
  color: #000;
  }
`
const LinkHome = styled(Link)`
  text-decoration: none;
  color: #fff;
`