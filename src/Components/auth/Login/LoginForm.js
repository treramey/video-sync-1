import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";

// <===============Material-ui Imports====================>
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, TextField, FormHelperText } from "@material-ui/core";

// <======================================================>

const useStyles = makeStyles(theme => ({
  root: {},
}));

export default function LoginForm() {
  const classes = useStyles();
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("Must be a valid email")
          .max(255)
          .required("Email is required"),
        password: Yup.string().max(255).required("Password is required"),
      })}
      onSubmit={(values, { setErrors, setStatus, setSubmitting }) => {
        console.log(values);
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        touched,
        values,
      }) => (
        <form
          // noValidate
          // className={clsx(classes.root, className)}
          onSubmit={handleSubmit}
          // {...rest}
        >
          <TextField
            error={Boolean(touched.email && errors.email)}
            fullWidth
            helperText={touched.email && errors.email}
            label="Email Address"
            margin="normal"
            name="email"
            onBlur={handleBlur}
            onChange={handleChange}
            type="email"
            value={values.email}
            variant="outlined"
          />
          <TextField
            error={Boolean(touched.password && errors.password)}
            fullWidth
            helperText={touched.password && errors.password}
            label="Password"
            margin="normal"
            name="password"
            onBlur={handleBlur}
            onChange={handleChange}
            type="password"
            value={values.password}
            variant="outlined"
          />
          <Box mt={2}>
            <Button
              color="secondary"
              disabled={isSubmitting}
              fullWidth
              size="large"
              type="submit"
              variant="contained"
            >
              Log In
            </Button>
            {errors.submit && (
              <Box mt={3}>
                <FormHelperText error>{errors.submit}></FormHelperText>
              </Box>
            )}
          </Box>
        </form>
      )}
    </Formik>
  );
}
