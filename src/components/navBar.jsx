import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          MyShop
        </Typography>
        <Button color="inherit" href="/">
          Home
        </Button>
        <Button color="inherit" href="/cart">
          Cart
        </Button>
        <Button color="inherit" href="/contact">
          Contact Us
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
