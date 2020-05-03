import React, { useEffect } from "react";
import NavBar from "../../Components/NavBar/navbar";
import DashboardView from "../../Components/DashBoard/DashboardView";
import { Container, makeStyles } from "@material-ui/core";
import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
  },
}));

function Dashboard({ user, history }) {
  const classes = useStyles();
  useEffect(() => {
    if (!user.email) {
      history.push("/");
    }
  }, [user, history]);
  return (
    <div className={classes.root}>
      <NavBar />
      <Container maxWidth="lg">
        <DashboardView />
      </Container>
    </div>
  );
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(Dashboard);
