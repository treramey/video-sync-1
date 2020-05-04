import React, { useState, useEffect, useRef } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Box, Divider, makeStyles } from "@material-ui/core";
import MessageAdd from "./MessageAdd";
import Message from "./Message";
import { connect } from "react-redux";

import io from "socket.io-client";
const ENDPOINT = "http://localhost:5050";
const socket = io(ENDPOINT);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: "flex",
    width: "100%",
    flexDirection: "column",
    backgroundColor: theme.palette.background.dark,
  },
}));

function ThreadView({ user }) {
  const classes = useStyles();
  const { email, first_name } = user;
  const messagesRef = useRef(null);
  const [name, setName] = useState("");
  // eslint-disable-next-line
  const [userEmail, setEmail] = useState("");
  // eslint-disable-next-line
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [thread, setThread] = useState([]);
  const ENDPOINT = "localhost:5050";

  function scrollMessagesToBottom() {
    if (messagesRef.current) {
      // eslint-disable-next-line no-underscore-dangle
      messagesRef.current._container.scrollTop =
        messagesRef.current._container.scrollHeight;
    }
  }

  useEffect(() => {
    const name = first_name;
    const userEmail = email;
    const room = "main";

    setName(name);
    setEmail(userEmail);
    setRoom(room);

    socket.emit("join", { name, email, room }, error => {
      if (error) {
        console.log(error);
      }
    });
    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOINT, first_name, email]);

  useEffect(() => {
    socket.on("message", message => {
      setThread([...thread, message]);
    });
  }, [thread]);

  useEffect(() => {
    if (thread) {
      scrollMessagesToBottom();
    }
    // eslint-disable-next-line
  }, [thread]);

  const sendMessage = event => {
    event.preventDefault();

    if (message) {
      //SOME TING WONG
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

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
            <Message key={index} message={message} name={name}></Message>
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
const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(ThreadView);
