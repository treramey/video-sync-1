import React from "react";
import { Avatar, Box, Link, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(2),
    display: "flex",
    wordWrap: "break-word",
  },
  avatar: {
    height: 18,
    width: 18,
    marginRight: 8,
  },
  image: {
    cursor: "pointer",
    height: "auto",
    maxWidth: "100%",
    width: 380,
  },
}));

export default function Message({ message }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box maxWidth={300}>
        <Box>
          <Box
            color={
              message.sender.type === "user"
                ? "secondary.contrastText"
                : "text.primary"
            }
            // px={1}
            display="flex"
          >
            <Avatar className={classes.avatar} src={message.sender.avatar} />
            <Link color="inherit" component={"RouterLink"} to="#" variant="h6">
              {message.sender.name}
            </Link>
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
