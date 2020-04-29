import React from "react";
import { Box, Card, CardHeader, Divider, makeStyles } from "@material-ui/core";
import ReactPlayer from "react-player";

const useStyles = makeStyles(theme => ({
  root: {},
  item: {
    textAlign: "center",
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: theme.spacing(3, 2),
    "&:not(:last-of-type)": {
      borderRight: `1px solid ${theme.palette.divider}`,
    },
    reactPlayer: {
      backgroundColor: "black",
    },
  },
}));

export default function VideoCard() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader
        // action={<GenericMoreButton />}
        title="Video"
      />
      <Divider />

      <Box minWidth={700} pt={3} pr={2} pl={2} pb={2}>
        <ReactPlayer
          className={classes.reactPlayer}
          width="100%"
          height={400}
          url="https://www.youtube.com/watch?v=oUFJJNQGwhk"
          config={{
            youtube: {
              playerVars: { showinfo: 1 },
            },
            facebook: {
              appId: "12345",
            },
          }}
        />
      </Box>
    </Card>
  );
}
