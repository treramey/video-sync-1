import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import axios from "axios";
import { connect } from "react-redux";
import { getUser } from "../../../ducks/reducer";

// <===============Material-ui Imports====================>
import { Box, Button, TextField, FormHelperText } from "@material-ui/core";

// <======================================================>

function LoginForm({ onSubmitSuccess, getUser }) {
  return (
    <Formik
      initialValues={{
        email: "demo@example.com",
        password: "demo",
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("Must be a valid email")
          .max(255)
          .required("Email is required"),
        password: Yup.string().max(255).required("Password is required"),
      })}
      onSubmit={(values, { setErrors, setStatus, setSubmitting }) => {
        const { email, password } = values;

        axios
          .post("/auth/login", { email, password })
          .then(res => {
            //set redux state
            getUser(res.data);
            //push to dashboard
            onSubmitSuccess();
          })
          .catch(error => {
            const message =
              (error.response && error.response.data.message) ||
              "Something went wrong";
            setStatus({ success: false });
            setErrors({ submit: message });
            setSubmitting(false);
          });
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
          noValidate
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
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}
          </Box>
        </form>
      )}
    </Formik>
  );
}

//redux subscribing

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps, { getUser })(LoginForm);
