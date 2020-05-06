import React from "react";
import {
  Box,
  Card,
  IconButton,
  Input,
  Paper,
  SvgIcon,
  makeStyles,
} from "@material-ui/core";
import { ArrowUpCircle } from "react-feather";

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

export default function VideoURL({ Url, setUrl, sendUrl }) {
  const classes = useStyles();
  // console.log(Url);
  return (
    <Card className={classes.root}>
      <Paper component={Box} flexGrow={1} p={2} elevation={0}>
        <div className={classes.flex}>
          <Input
            className={classes.input}
            disableUnderline
            fullWidth
            value={Url}
            onChange={({ target: { value } }) => setUrl(value)}
            onKeyPress={event =>
              event.key === "Enter" ? sendUrl(event) : null
            }
            placeholder={Url}
          />
          <IconButton
            color="primary"
            // disabled={!body || disabled}
            onClick={e => sendUrl(e)}
          >
            <SvgIcon>
              <ArrowUpCircle />
            </SvgIcon>
          </IconButton>
        </div>
      </Paper>
    </Card>
  );
}
