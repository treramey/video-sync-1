import React from "react";
import { Box, Card, CardHeader, Divider, makeStyles } from "@material-ui/core";
import ThreadView from "./Thread/ThreadView";

const useStyles = makeStyles(theme => ({
  root: {
    // backgroundColor: theme.palette.background.dark,
    height: 440,
    display: "flex",
    overflow: "hidden",
    position: "relative",
  },
}));

export default function ChatCard() {
  const classes = useStyles();
  return (
    <Card>
      <CardHeader
        // action={<GenericMoreButton />}
        title="Chats"
      />
      <Divider />
      <Box p={1} position="relative" className={classes.root}>
        <ThreadView />
      </Box>
    </Card>
  );
}
