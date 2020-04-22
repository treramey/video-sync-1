import React from "react";
import { Link as RouterLink } from "react-router-dom";
import RegisterForm from "./RegisterForm";

import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Link,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: "center",
    backgroundColor: theme.palette.background.dark,
    display: "flex",
    height: "100%",
    minHeight: "100%",
    flexDirection: "column",
    paddingBottom: 80,
    paddingTop: 80,
  },
  card: {
    backgroundColor: "#282A2D",
  },
}));

function RegisterCard() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        <Card className={classes.card}>
          <CardContent>
            <Typography gutterBottom variant="h2" color="textPrimary">
              Sign up
            </Typography>
            <Typography variant="subtitle1">
              Sign up on the internal platform
            </Typography>
            <Box mt={3}>
              <RegisterForm
              //   onSubmitSuccess={handleSubmitSuccess}
              />
            </Box>
            <Box my={2}>
              <Divider />
            </Box>
            <Link
              component={RouterLink}
              to="/"
              variant="body2"
              color="textSecondary"
            >
              Have an account?
            </Link>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}

export default RegisterCard;
