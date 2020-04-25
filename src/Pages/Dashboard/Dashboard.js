import React from "react";
import { connect } from "react-redux";
import NavBar from "../../Components/NavBar/navbar";
import { Container, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  container: {
    [theme.breakpoints.up("lg")]: {
      paddingLeft: 64,
      paddingRight: 64,
    },
  },
}));
function Dashboard() {
  // componentDidMount() {
  //   if (!this.props.user.email) {
  //     this.props.history.push("/");
  //   }
  // }
  const classes = useStyles();
  return (
    <div className={classes.root} title="Dashboard">
      <NavBar />
      <Container maxWidth={false} className={classes.container}>
        {/* <Header /> */}
        <Grid container spacing={3}>
          <Grid item lg={5} xl={4} xs={12}>
            {/* <TeamTasks /> */}
          </Grid>
          <Grid item lg={7} xl={8} xs={12}>
            {/* <LatestProjects /> */}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(Dashboard);
