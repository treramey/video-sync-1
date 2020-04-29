import React from "react";
import { Box, Card, CardHeader, Divider, makeStyles } from "@material-ui/core";
import ThreadView from "./Thread/ThreadView";

const useStyles = makeStyles(theme => ({
  root: {},
  item: {
    textAlign: "center",
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: theme.spacing(3, 2),
    "&:not(:last-of-type)": {
      borderRight: `1px solid ${theme.palette.divider}`,
    },
  },
}));

export default function ChatCard() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader
        // action={<GenericMoreButton />}
        title="Chats"
      />
      <Divider />
      <Box p={1} position="relative" minHeight={440}>
        <ThreadView />
      </Box>
      <Box display="flex"></Box>
    </Card>
  );
}
