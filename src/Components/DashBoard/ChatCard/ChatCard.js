import React from "react";
import { Box, Card, CardHeader, Divider, makeStyles } from "@material-ui/core";
import ThreadView from "./Thread/ThreadView";

const useStyles = makeStyles(theme => ({
  root: {
    // backgroundColor: theme.palette.background.dark,
    height: 432,
    display: "flex",
    overflow: "hidden",
    position: "relative",
  },
}));

function ChatCard({ setMessage, message, sendMessage, thread}) {
  const classes = useStyles();
  // console.log(avatar);
  return (
    <Card>
      <CardHeader
        // action={<GenericMoreButton />}
        title="Chats"
      />
      <Divider />
      <Box p={1} position="relative" className={classes.root}>
        <ThreadView
          thread={thread}
          sendMessage={sendMessage}
          message={message}
          setMessage={setMessage}
         
        />
      </Box>
    </Card>
  );
}

export default ChatCard;
