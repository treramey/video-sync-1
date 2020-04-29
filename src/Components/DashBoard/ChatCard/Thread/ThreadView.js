import React from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Box, Divider, makeStyles } from "@material-ui/core";
import MessageAdd from "./MessageAdd";
import Message from "./Message";
const useStyles = makeStyles(theme => ({
  root: {
    height: 420,
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.background.dark,
  },
}));

export default function ThreadView() {
  // const thread = [{ id: 1, message: "hello" }];
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box
        flexGrow={1}
        p={2}
        // ref={messagesRef}
        component={PerfectScrollbar}
        options={{ suppressScrollX: true }}
      >
        {/* {thread.messages.length > 0 && */}
        {/* {thread.messages.map(message => (
          <Message key={message.id} message={message} />
        ))} */}
        <Message />
      </Box>
      <Divider />
      <MessageAdd
      // thread={thread}
      />
    </div>
  );
}
