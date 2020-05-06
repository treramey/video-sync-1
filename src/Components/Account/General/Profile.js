import React from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {},
  name: {
    marginTop: theme.spacing(1),
  },
  avatar: {
    height: 100,
    width: 100,
  },
}));

export default function Profile({ user }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Box
          display="flex"
          alignItems="center"
          flexDirection="column"
          textAlign="center"
        >
          <Avatar className={classes.avatar} src={user.avatar} />
          <Typography
            className={classes.name}
            gutterBottom
            variant="h3"
            color="textPrimary"
          >
            {`${user.first_name} ${user.last_name}`}
          </Typography>
          <Typography color="textPrimary" variant="body1">
            {/* {`${user.state}, ${user.country}`} */}
          </Typography>
          <Typography color="textSecondary" variant="body2">
            {/* {user.timezone} */}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button fullWidth variant="text">
          Upload Avatar
        </Button>
      </CardActions>
      <CardActions>
        <Button fullWidth variant="outlined" color="secondary">
          Remove Avatar
        </Button>
      </CardActions>
    </Card>
  );
}
