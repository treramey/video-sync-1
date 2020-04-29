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
    padding: theme.spacing(1),
  },
  flex: {
    display: "flex",
    alignItems: "center",
  },
  fileInput: {
    display: "none",
  },
}));

export default function MessageAdd() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper variant="outlined" component={Box} flexGrow={1} p={1}>
        <div className={classes.flex}>
          <Input
            className={classes.input}
            disableUnderline
            fullWidth
            //   value={body}
            //   onChange={handleChange}
            //   onKeyUp={handleKeyUp}
            placeholder="Message"
          />
          <IconButton
            color="primary"
            // disabled={!body || disabled}
            // onClick={handleSend}
          >
            <SvgIcon fontSize="small">
              <ArrowUp />
            </SvgIcon>
          </IconButton>
        </div>
      </Paper>

      <input
        className={classes.fileInput}
        //    ref={fileInputRef}
        type="file"
      />
    </div>
  );
}
