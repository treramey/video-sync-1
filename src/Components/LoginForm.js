import React from "react";

// <===============Material-ui Imports====================>
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, TextField } from "@material-ui/core";

// <======================================================>

const useStyles = makeStyles(theme => ({
  root: {},
  MuiInputLabel: {
    color: "white",
  },
}));

export default function LoginForm() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <form
      // noValidate
      // // className={clsx(classes.root, className)}
      // onSubmit={handleSubmit}
      // {...rest}
      >
        <TextField
          //   error={Boolean(touched.email && errors.email)}
          fullWidth
          autoFocus
          //   helperText={touched.email && errors.email}
          label="Email Address"
          margin="normal"
          name="email"
          //   onBlur={handleBlur}
          //   onChange={handleChange}
          type="email"
          //   value={values.email}
          variant="outlined"
          color="primary"
        />
        <TextField
          //   error={Boolean(touched.password && errors.password)}
          fullWidth
          //   helperText={touched.password && errors.password}
          label="Password"
          margin="normal"
          name="password"
          //   onBlur={handleBlur}
          //   onChange={handleChange}
          type="password"
          //   value={values.password}
          variant="outlined"
          color="primary"
        />
        <Box mt={2}>
          <Button
            color="secondary"
            // disabled={isSubmitting}
            fullWidth
            size="large"
            type="submit"
            variant="contained"
          >
            Log In
          </Button>
          {/* {errors.submit && (
            <Box mt={3}>
              <FormHelperText error>{errors.submit}</FormHelperText>
            </Box>
          )} */}
        </Box>
      </form>
    </div>
  );
}
