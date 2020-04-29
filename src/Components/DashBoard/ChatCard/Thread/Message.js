import React from "react";
import { Avatar, Box, Link, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(2),
    display: "flex",
  },
  avatar: {
    height: 24,
    width: 24,
  },
  image: {
    cursor: "pointer",
    height: "auto",
    maxWidth: "100%",
    width: 380,
  },
}));

export default function Message() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box
        display="flex"
        maxWidth={500}
        // ml={sender.type === "user" ? "auto" : 0}
      >
        <Avatar
          className={classes.avatar}
          // src={sender.avatar}
        />
        <Box>
          <Box
            color={
              "text.primary"
              //   sender.type === "user" ? "secondary.contrastText" : "text.primary"
            }
            px={2}
            borderRadius="borderRadius"
            // boxShadow={1}
          >
            <Link color="inherit" component={"RouterLink"} to="#" variant="h6">
              {"sender.name"}
            </Link>
            <Box mt={1}>
              {"message.contentType" === "image" ? (
                <Box mt={2} onClick={"() => setOpenedFile(message.body)"}>
                  <img
                    alt="Attachment"
                    className={classes.image}
                    // src={message.body}
                  />
                </Box>
              ) : (
                <Typography color="inherit" variant="body1">
                  {"message.body"}
                </Typography>
              )}
            </Box>
          </Box>
          <Box mt={1} display="flex" justifyContent="flex-end">
            <Typography noWrap color="textSecondary" variant="caption">
              {/* {moment(message.createdAt).fromNow()} */}
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* {openedFile && (
        <Lightbox large={openedFile} onClose={() => setOpenedFile(null)} />
      )} */}
    </div>
  );
}
