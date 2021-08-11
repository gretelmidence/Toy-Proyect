import { React, useState } from 'react';
import { Container, AppBar, Toolbar, IconButton, Badge, Typography, Menu, MenuItem } from "@material-ui/core";
import { Link } from "react-router-dom";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import "./style.css";

const NavBar = (props) => {
  const { setUserState} = props;
  const [auth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    localStorage.removeItem('user');
    if(setUserState) {
      setUserState();
    }
    setAnchorEl(null);
  }

  const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
  };

  const refreshPage = (path) => {
    window.location.href = path;
  };

  return (
    <>
      <AppBar position="fixed" className="custom-navbar">
        <Container>
          <Toolbar>
            <Typography component={Link} to="/" variant="h6" onClick={() => {
                refreshPage("/");
              }}
              className="custom-title"
              color="inherit">
              <img src="https://img.icons8.com/clouds/50/000000/apple-arcade.png" alt="Game Logo" height="28px"
                className="logo"/>
            </Typography>
            <div className="navbar-items">
              {auth && (
                <div>
                  <IconButton aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true"
                    onClick={handleMenu} color="inherit">
                    <ExitToAppIcon />
                    </IconButton>
                    <Menu
                      id="menu-appbar" anchorEl={anchorEl}
                      anchorOrigin={{vertical: 'top',horizontal: 'right',}}
                      keepMounted
                      transformOrigin={{vertical: 'top',horizontal: 'right',}}
                      open={open}
                      onClose={handleClose}>
                      <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                </div>
                )}
              <div className="basket-wrapper">
                  <IconButton component={Link} to="/basket"
                    aria-label="Show basket contents"
                    color="inherit">
                    <Badge badgeContent="0" color="secondary">
                      <BookmarksIcon className="custom-basket" 
                      onClick={() => {refreshPage("/basket");}}/>
                    </Badge>
                  </IconButton>
              </div>
                
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};


export default NavBar;
