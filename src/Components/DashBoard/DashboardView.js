import React, { useState, useEffect } from "react";
import Header from "../../Components/DashBoard/Header";
import ChatCard from "./ChatCard/ChatCard";
import VideoCard from "./VideoCard/VideoCard";
import VideoURL from "./VideoCard/VideoURL/VideoURL";
import { Container, Grid, makeStyles } from "@material-ui/core";
import { connect } from "react-redux";
import io from "socket.io-client";
let socket;

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
  videoCard: {
    order: 1,
    [theme.breakpoints.up("lg")]: {
      order: 1,
    },
  },
  chatCard: {
    order: 3,
    [theme.breakpoints.up("lg")]: {
      order: 2,
    },
  },
  videoURL: {
    order: 2,
    [theme.breakpoints.up("lg")]: {
      order: 3,
    },
  },
  mainGrid: {
    marginTop: 16,
  },
}));

function DashboardView({ user }) {
  // <==========================SocketIO=======================>
  const { first_name, avatar } = user;
  // console.log(avatar);
  // const [userName, setName] = useState("");
  // const [userEmail, setEmail] = useState("");
  // eslint-disable-next-line
  const [users, setUsers] = useState("");
  // const [userRoom, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [thread, setThread] = useState([]);

  const [Url, setUrl] = useState("https://www.youtube.com/watch?v=G1IbRujko-A");

  const [currentUrl, setCurrentUrl] = useState(
    "https://www.youtube.com/watch?v=G1IbRujko-A"
  );
  const [playing, setPlaying] = useState(false);

  //<<<<<<<<< Helper Functions >>>>>>>>>>
  const sendMessage = event => {
    event.preventDefault();

    if (message) {
      //SOME TING WONG
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  const sendUrl = event => {
    event.preventDefault();

    if (Url) {
      //do something
      setCurrentUrl(Url);
      socket.emit("sendURL", Url);
    }
  };

  const sendPlayerState = state => {
    socket.emit("sendPlayerState", state);
  };

  // <<<<<<<<<<<<< Comment Mounts >>>>>>>>>>>>>>>>>
  useEffect(() => {
    const name = first_name;

    // const userEmail = email;
    const room = "main";
    socket = io.connect();

    // setName(name);
    // setEmail(email);
    // setRoom(room);

    socket.emit("join", { name, avatar, room }, error => {
      if (error) {
        console.log(error);
      }
    });
    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, []);

  useEffect(() => {
    socket.on("message", message => {
      setThread(thread => [...thread, message]);

      socket.on("roomData", ({ users }) => {
        setUsers(users);
      });
    });
  }, []);

  useEffect(() => {
    socket.on("Url", Url => {
      setCurrentUrl(Url);
    });
  }, []);

  useEffect(() => {
    socket.on("playerState", state => {
      // console.log(state);
      setPlaying(state);
    });
  }, []);
  // console.log(avatar, thread);

  // <==========================SocketIO=======================>
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth={false} className={classes.container}>
        <Header />

        <Grid container spacing={2} className={classes.mainGrid}>
          <Grid item lg={8} xs={12} className={classes.videoCard}>
            <VideoCard
              Url={Url}
              currentUrl={currentUrl}
              playing={playing}
              setPlaying={setPlaying}
              sendPlayerState={sendPlayerState}
            />
          </Grid>
          <Grid item lg={4} xs={12} className={classes.chatCard}>
            <ChatCard
              thread={thread}
              sendMessage={sendMessage}
              message={message}
              setMessage={setMessage}
            />
          </Grid>
          <Grid item lg={8} xs={12} className={classes.videoURL}>
            <VideoURL setUrl={setUrl} Url={Url} sendUrl={sendUrl} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(DashboardView);
