import React from "react";
import {
  Box,
  IconButton,
  Input,
  Paper,
  SvgIcon,
  makeStyles,
} from "@material-ui/core";
import { ArrowUp } from "react-feather";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    display: "flex",
    alignItems: "center",
    // padding: theme.spacing(1),
  },
  flex: {
    display: "flex",
    alignItems: "center",
  },
  fileInput: {
    display: "none",
  },
}));

export default function MessageAdd({ setMessage, sendMessage, message }) {
  const classes = useStyles();

  // const handleChange = event => {
  //   event.persist();
  //   setMessage(event.target.value);
  // };

  // const handleKeyUp = event => {
  //   if (event.keyCode === 13) {
  //     sendMessage(event);
  //   }
  // };

  // const handleSend = event => {
  //   sendMessage(event);
  // };

  return (
    <div className={classes.root}>
      <Paper component={Box} flexGrow={1} p={1} elevation={0}>
        <div className={classes.flex}>
          <Input
            className={classes.input}
            disableUnderline
            fullWidth
            value={message}
            onChange={({ target: { value } }) => setMessage(value)}
            onKeyPress={event =>
              event.key === "Enter" ? sendMessage(event) : null
            }
            placeholder="Message"
          />
          <IconButton
            color="primary"
            // disabled={!body || disabled}
            onClick={e => sendMessage(e)}
          >
            <SvgIcon fontSize="small">
              <ArrowUp />
            </SvgIcon>
          </IconButton>
        </div>
      </Paper>
    </div>
  );
}
