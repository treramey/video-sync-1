import React from "react";
import { Link as RouterLink } from "react-router-dom";

import Account from "./Account";
import Logo from "../../assets/cat3.svg";

import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {},
  toolbar: {
    minHeight: 80,
  },
  avatar: {
    height: 44,
    width: 44,
  },
}));

function Navbar() {
  const classes = useStyles();
  return (
    <AppBar position="absolute">
      <Toolbar className={classes.toolbar}>
        <IconButton size="small">
          <RouterLink to="/">
            <img alt="Logo" src={Logo} className={classes.avatar} />
          </RouterLink>
        </IconButton>
        <Box ml={2} flexGrow={1} />
        <Box ml={2}>
          <Account />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
