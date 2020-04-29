import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { AlignLeft } from "react-feather";
import Account from "./Account";
import Logo from "../../assets/cat3.svg";

import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  makeStyles,
  SvgIcon,
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
        <Hidden lgUp>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            // onClick={onMobileNavOpen}
          >
            <SvgIcon fontSize="large">
              <AlignLeft />
            </SvgIcon>
          </IconButton>
        </Hidden>
        <Hidden mdDown>
          <IconButton size="small">
            <RouterLink to="/">
              <img alt="Logo" src={Logo} className={classes.avatar} />
            </RouterLink>
          </IconButton>
        </Hidden>
        <Box ml={2} flexGrow={1} />
        <Box ml={2}>
          <Account />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
