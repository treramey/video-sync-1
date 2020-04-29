import React from "react";
import { connect } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

import { Breadcrumbs, Grid, Link, Typography } from "@material-ui/core";

function Header({ user }) {
  return (
    <Grid container spacing={3} justify="space-between">
      <Grid item>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          <Link
            variant="body1"
            color="inherit"
            to="/dashboard"
            component={RouterLink}
          >
            Dashboard
          </Link>
          <Typography variant="body1" color="textPrimary">
            Account
          </Typography>
        </Breadcrumbs>
        <Typography variant="h2" color="textSecondary">
          Settings
        </Typography>
      </Grid>
    </Grid>
  );
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(Header);
