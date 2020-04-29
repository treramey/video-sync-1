import React, { useRef, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useHistory } from "react-router";
import { Settings } from "react-feather";
import { connect } from "react-redux";
import { clearUser } from "../../ducks/reducer";
import axios from "axios";
import {
  Tooltip,
  IconButton,
  Menu,
  MenuItem,
  SvgIcon,
  Box,
  Avatar,
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

function Account({ clearUser }) {
  const classes = useStyles();
  const history = useHistory();
  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = async () => {
    try {
      handleClose();
      await axios.get("/api/auth/logout");
      await clearUser();
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Box display="flex" alignItems="center">
        <Avatar
          alt="User"
          className={classes.avatar}
          // src={account.user.avatar}
        />
        <Tooltip title="Settings">
          <IconButton color="inherit" onClick={handleOpen} ref={ref}>
            <SvgIcon fontSize="default">
              <Settings />
            </SvgIcon>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        keepMounted
        PaperProps={{ className: classes.popover }}
        getContentAnchorEl={null}
        anchorEl={ref.current}
        open={isOpen}
      >
        <MenuItem component={RouterLink} to="/account">
          Account
        </MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </>
  );
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps, { clearUser })(Account);
