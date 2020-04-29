import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import GeneralSettings from "./GeneralSettings";
import Profile from "./Profile";
import { connect } from "react-redux";

const useStyles = makeStyles(() => ({
  root: {},
}));

function General({ user }) {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container spacing={3}>
      <Grid item lg={4} md={6} xl={3} xs={12}>
        <Profile user={user} />
      </Grid>
      <Grid item lg={8} md={6} xl={9} xs={12}>
        <GeneralSettings />
      </Grid>
    </Grid>
  );
}

const mapStateToProps = reduxStore => reduxStore;

export default connect(mapStateToProps)(General);
