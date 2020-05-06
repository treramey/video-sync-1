import React from "react";
import { Avatar, Box, Typography, makeStyles } from "@material-ui/core";
import FadeIn from "react-fade-in";
const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(2),
    display: "flex",
    wordWrap: "break-word",
  },
  avatar: {
    height: 20,
    width: 20,
    marginRight: 8,
  },
  image: {
    cursor: "pointer",
    height: "auto",
    maxWidth: "100%",
    width: 380,
  },
}));

export default function Message({ message, avatar }) {
  const classes = useStyles();
  return (
    <FadeIn>
      <div className={classes.root}>
        <Box maxWidth={300}>
          <Box>
            <Box
              color={
                "secondary.contrastText"
                // message.user.name === name
                // ?
                // : "text.primary"
              }
              // px={1}
              display="flex"
            >
              {message.user === "Admin" ? (
                <div></div>
              ) : (
                <Avatar className={classes.avatar} src={avatar} />
              )}

              <Typography color="inherit" variant="h6">
                {message.user.name}
              </Typography>
            </Box>
            <Box mt={1}>
              <Typography color="inherit" variant="body2">
                {message.body}
              </Typography>
            </Box>
            <Box mt={1} display="flex" justifyContent="flex-end">
              {/* <Typography noWrap color="textPrimary" variant="caption">
              read
            </Typography> */}
            </Box>
          </Box>
        </Box>
      </div>
    </FadeIn>
  );
}
