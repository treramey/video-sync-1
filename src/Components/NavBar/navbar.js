import React from "react";
import { Link } from "react-router-dom";
import { AlignLeft, Settings } from "react-feather";
import Account from "./Account";

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
}));

function Navbar() {
  const classes = useStyles();
  return (
    <AppBar>
      <Toolbar className={classes.toolbar}>
        <IconButton
          className={classes.menuButton}
          color="inherit"
          //   onClick={onMobileNavOpen}
        >
          <SvgIcon fontSize="large">
            <AlignLeft color="white" />
          </SvgIcon>
        </IconButton>

        <Hidden mdDown>
          <Link to="/">{/* <Logo /> */}</Link>
        </Hidden>
        <Box ml={2} flexGrow={1} />
        {/* <Search /> */}
        {/* <Contacts /> */}
        {/* <Notifications /> */}
        {/* <Settings /> */}
        <Box ml={2}>
          <Account />
        </Box>
        <IconButton
          className={classes.menuButton}
          color="inherit"
          //   onClick={onMobileNavOpen}
        >
          <SvgIcon fontSize="small">
            <Settings color="white" />
          </SvgIcon>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
