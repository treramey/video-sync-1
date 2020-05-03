import React, { useState, useEffect, useRef } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Box, Divider, makeStyles } from "@material-ui/core";
import MessageAdd from "./MessageAdd";
import Message from "./Message";
import io from "socket.io-client";
import { connect } from "react-redux";

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
    //remove Trevor and demo when finished with the dashboard
    const name = first_name;
    const userEmail = email;
    const room = "main";

    socket = io(ENDPOINT);

    setName(name);
    setEmail(userEmail);
    setRoom(room);

    socket.emit("join", { name, email, room }, error => {
      if (error) {
        console.log(error);
      }
    });
    // return () => {
    //   socket.emit("disconnect");
    //   socket.off();
    // };
  }, [ENDPOINT, first_name, email]);

  useEffect(() => {
    socket.on("message", message => {
      setThread([...thread, message]);
    });
  }, [thread]);

  useEffect(() => {
    if (messages) {
      scrollMessagesToBottom();
    }
    // eslint-disable-next-line
  }, [messages]);

  const sendMessage = event => {
    event.preventDefault();

    if (message) {
      console.log(message);
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
