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

export const NavBar = () => {

  const [user] = useAuthState(auth)

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleLogOut = () => auth.signOut()

  console.log(user);

  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  }

  const handleMobileMenuOpen = (event) => setMobileMoreAnchorEl(event.currentTarget);

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >

      <MenuItem onClick={handleMenuClose}><Avatar src={user?.photoURL} /></MenuItem>
      <MenuItem onClick={handleMenuClose}>Cerrar Sesion</MenuItem>
    </Menu>
  );

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
          <>

            <MenuItem>
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
          </>
          :
          <MenuItem>
            <IconButton color="inherit">
              <Badge color="secondary">
                <ExitToAppIcon />
              </Badge>
            </IconButton>
            <p>Iniciar Sesion</p>
          </MenuItem>

      }


    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            DevJobs
          </Typography>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>

            {
              user
                ?
                <>
                  <IconButton color="inherit">
                    <Avatar src={user?.photoURL} />
                  </IconButton>
                  <Button onClick={handleLogOut} color="inherit">Cerrar Sesion</Button>
                </>
                :
                <Button onClick={handleLogOut} color="inherit">Iniciar Sesion</Button>
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
      {renderMenu}
    </div>
  );
}
