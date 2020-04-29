import React from "react";
import Header from "../../Components/DashBoard/Header";
import ChatCard from "./ChatCard/ChatCard";
import VideoCard from "./VideoCard/VideoCard";
import { Container, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  container: {
    [theme.breakpoints.up("lg")]: {
      paddingLeft: 64,
      paddingRight: 64,
    },
  },
}));

export default function DashboardView() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth={false} className={classes.container}>
        <Header />
        <Grid container spacing={3}>
          <Grid item lg={8} xs={12}>
            <VideoCard />
          </Grid>
          <Grid item lg={4} xs={12}>
            <ChatCard />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
