import {
  Container,
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import "./style.css";
import React from 'react';
import {Menu, MenuItem, makeStyles,fade} from '@material-ui/core';
import {AccountCircle} from '@material-ui/icons';
import {useState} from 'react';



const NavBar = (props) => {
  const { basketItems, totalCost, setUserState, products } = props ;
  const location = useLocation();
  const classes = useStyles();
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const [basketData, setBasketData] = useState([]);
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
  const refreshPage = () => {
    window.location.href = "/";
};
  // const handleSearchChange = (event) => {
  //   let value = event.target.value.toLowerCase();
  //   let result = [];
  //   result = products.filter((data) => {
  //     let title = data.external.toLowerCase();
  //     return title.search(value) !== -1;
  //   });
  //   setFilteredData(result);
  // };

  const addProduct = async (productId) => {
    const basket = basketData.concat(productId);
    console.log(basket);
    localStorage.setItem('basketData', JSON.stringify(basket));
  };

  return (
    <>
      <AppBar position="fixed" className="custom-navbar">
        <Container>
          <Toolbar>
            <Typography
              component={Link}
              to="/"
              variant="h6"
              onClick={refreshPage}
              className="custom-title"
              color="inherit">
              <img
                src="https://img.icons8.com/64/000000/controller.png"
                alt="Game Logo"
                height="28px"
                className="logo"/>
            </Typography>
            <div className="navbar-items">
              {auth && (
                <div>
                  <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit">
                    <AccountCircle />
                    </IconButton>
                    <Menu
                      id="menu-appbar"
                      anchorEl={anchorEl}
                      anchorOrigin={{
                          vertical: 'top',
                          horizontal: 'right',
                      }}
                      keepMounted
                      transformOrigin={{
                          vertical: 'top',
                          horizontal: 'right',
                      }}
                      open={open}
                      onClose={handleClose}>
                    
                      <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                  </div>
                )}
                      
              {/* <div className="navbar-search">
                <SearchIcon className={classes.searchIcon}/>
                  <TextField onChange={handleSearchChange}className={classes.searchInput}
                    label="Search Game" variant="standard"
                  />
              </div> */}

              {/* {location.pathname === "/basket" ? (
                <div className="basket-wrapper">
                  <h2>
                    Total cost: <strong>{totalCost}</strong>
                  </h2>
                </div>
              ) : (
                <div className="basket-wrapper">
                  <IconButton
                    component={Link}
                    to="/basket"
                    aria-label="Show basket contents"
                    color="inherit"
                  >
                    <Badge badgeContent={basketItems} color="secondary">
                      <ShoppingCart className="custom-basket" />
                    </Badge>
                  </IconButton>
                </div>
              )} */}
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      {/* <Switch> */}
        {/* <Products products={filteredData && filteredData.length ? filteredData : products} addProduct={addProduct}></Products>
        <Route exact path="/product-view/:gameID">
                <ProductView />
              </Route> */}
      {/* </Switch>         */}
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
      flexGrow: 1
  },
  menubackgroud: {
      background: 'linear-gradient(45deg, #F78888 ,#F3D250 ,#ECECEC , #90CCF4 , #5DA2DE )',
  }, 
  title: {
      flexGrow: 1
  }
}));

export default NavBar;
