import React, { useState, useEffect, useRef } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Box, Divider, makeStyles } from "@material-ui/core";
import MessageAdd from "./MessageAdd";
import Message from "./Message";
import io from "socket.io-client";

let socket;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: "flex",
    width: "100%",
    flexDirection: "column",
    backgroundColor: theme.palette.background.dark,
  },
}));

const messages = [
  {
    id: 1,
    body: "hello good friend",
    sender: {
      type: "user",
      name: "Trevor",
      avatar: "",
    },
  },
  {
    id: 2,
    body: "Im doing good ",
    sender: {
      type: "notUser",
      name: "Jon",
      avatar: "",
    },
  },
  {
    id: 3,
    body: "Thats good to hear",
    sender: {
      type: "user",
      name: "Trevor",
      avatar: "",
    },
  },
  {
    id: 5,
    body:
      "https://github.com/creativetimofficial/black-dashboard/blob/master/assets/scss/black-dashboard/plugins/_plugin-perfect-scrollbar.scss",
    sender: {
      type: "user",
      name: "Jon",
      avatar:
        "https://img.pngio.com/avatar-user-computer-icons-software-deve-254409-png-images-pngio-png-avatar-900_540.png",
    },
  },
];

function ThreadView() {
  // const [name, setName] = useState("");
  const ENDPOINT = "localhost:5050";
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
    socket = io(ENDPOINT);

    socket.emit("join");

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOINT]);

  useEffect(() => {
    if (messages) {
      scrollMessagesToBottom();
    }
    // eslint-disable-next-line
  }, [messages]);
  return (
    <div className={classes.root}>
      <Box
        flexGrow={1}
        p={2}
        ref={messagesRef}
        component={PerfectScrollbar}
        options={{ suppressScrollX: true }}
      >
        {messages.length > 0 &&
          messages.map(message => (
            <Message key={message.id} message={message}>
              {console.log(message)}
            </Message>
          ))}
      </Box>
      <Divider />
      <MessageAdd
      // thread={thread}
      />
    </div>
  );
}

export default ThreadView;
