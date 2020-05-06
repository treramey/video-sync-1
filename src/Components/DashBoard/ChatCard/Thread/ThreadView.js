import React, { useEffect, useRef } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Box, Divider, makeStyles } from "@material-ui/core";
import MessageAdd from "./MessageAdd";
import Message from "./Message";

// import io from "socket.io-client";
// let socket;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: "flex",
    width: "100%",
    flexDirection: "column",
    backgroundColor: theme.palette.background.dark,
  },
}));

function ThreadView({ setMessage, thread, message, sendMessage }) {
  const classes = useStyles();

  const messagesRef = useRef(null);

  function scrollMessagesToBottom() {
    if (messagesRef.current) {
      // eslint-disable-next-line no-underscore-dangle
      messagesRef.current._container.scrollTop =
        messagesRef.current._container.scrollHeight;
    }
  }
  useEffect(() => {
    if (thread) {
      scrollMessagesToBottom();
    }
    // eslint-disable-next-line
  }, [thread]);

  return (
    <div className={classes.root}>
      <Box
        flexGrow={1}
        p={2}
        ref={messagesRef}
        component={PerfectScrollbar}
        options={{ suppressScrollX: true }}
      >
        {thread.length > 0 &&
          thread.map((message, index) => (
            <Message
              key={index}
              message={message}
              avatar={message.user.avatar}
            ></Message>
          ))}
      </Box>
      <Divider />
      <MessageAdd
        // thread={thread}
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
      />
    </div>
  );
}

export default ThreadView;
