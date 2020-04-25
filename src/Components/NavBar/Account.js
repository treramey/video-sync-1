import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { connect } from "react-redux";
import {
  Avatar,
  Box,
  ButtonBase,
  Hidden,
  Menu,
  MenuItem,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  avatar: {
    height: 32,
    width: 32,
    marginRight: theme.spacing(1),
  },
  popover: {
    width: 200,
  },
}));

function Account({ user }) {
  const classes = useStyles();
  const history = useHistory();
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        // component={ButtonBase}
        // onClick={handleOpen}
        // ref={ref}
      >
        <Hidden smDown>
          <Typography variant="h4" color="secondary">
            {`Welcome ${user.first_name}`}
          </Typography>
        </Hidden>
      </Box>
      <Menu
        // onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        keepMounted
        PaperProps={{ className: classes.popover }}
        getContentAnchorEl={null}
        // anchorEl={ref.current}
        // open={isOpen}
      >
        <MenuItem component={Link} to="/app/social/profile">
          Profile
        </MenuItem>
        <MenuItem component={Link} to="/app/account">
          Account
        </MenuItem>
        <MenuItem
        // onClick={handleLogout}
        >
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}
const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(Account);
