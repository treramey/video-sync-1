import React from "react";
import { Avatar, Box, Typography, makeStyles } from "@material-ui/core";

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

export default function Message({ message, name }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box maxWidth={300}>
        <Box>
          <Box
            color={
              message.user.name === name
                ? "secondary.contrastText"
                : "text.primary"
            }
            // px={1}
            display="flex"
          >
            {message.user === "Admin" ? (
              <div></div>
            ) : (
              <Avatar
                className={classes.avatar}
                src={
                  message.user.avatar ||
                  "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
                }
              />
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
  );
}
