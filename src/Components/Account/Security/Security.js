import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { connect } from "react-redux";
import axios from "axios";
import FadeIn from "react-fade-in";

import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  FormHelperText,
  Grid,
  TextField,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {},
}));

function Security({ user }) {
  const classes = useStyles();
  return (
    <Formik
      initialValues={{
        password: "",
        passwordConfirm: "",
      }}
      validationSchema={Yup.object().shape({
        password: Yup.string()
          .min(8, "Must be at least 8 characters")
          .max(255)
          .required("Required"),
        passwordConfirm: Yup.string()
          .oneOf([Yup.ref("password"), null], "Passwords must match")
          .required("Required"),
      })}
      onSubmit={(
        values,
        { resetForm, setErrors, setStatus, setSubmitting }
      ) => {
        const { password } = values;
        axios
          .put(`/api/update/password/${user.user_id}`, { password })
          .then(() => {
            resetForm();
            setStatus({ success: true });
            setSubmitting(false);
          })
          .catch(error => {
            setStatus({ success: false });
            setErrors({ submit: error.message });
            setSubmitting(false);
          });

        //   //   enqueueSnackbar("Password updated", {
        //   //     variant: "success",
        //   //   });
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
        <FadeIn>
          <form onSubmit={handleSubmit}>
            <Card className={classes.root}>
              <CardHeader title="Change Password" />
              <Divider />
              <CardContent>
                <Grid container spacing={3}>
                  <Grid item md={4} sm={6} xs={12}>
                    <TextField
                      error={Boolean(touched.password && errors.password)}
                      fullWidth
                      helperText={touched.password && errors.password}
                      label="Password"
                      name="password"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      type="password"
                      value={values.password}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item md={4} sm={6} xs={12}>
                    <TextField
                      error={Boolean(
                        touched.passwordConfirm && errors.passwordConfirm
                      )}
                      fullWidth
                      helperText={
                        touched.passwordConfirm && errors.passwordConfirm
                      }
                      label="Password Confirmation"
                      name="passwordConfirm"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      type="password"
                      value={values.passwordConfirm}
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
                {errors.submit && (
                  <Box mt={3}>
                    <FormHelperText error>{errors.submit}</FormHelperText>
                  </Box>
                )}
              </CardContent>
              <Divider />
              <Box p={2} display="flex" justifyContent="flex-end">
                <Button
                  color="secondary"
                  disabled={isSubmitting}
                  type="submit"
                  variant="contained"
                >
                  Change Password
                </Button>
              </Box>
            </Card>
          </form>
        </FadeIn>
      )}
    </Formik>
  );
}

const mapStateToProps = reduxState => reduxState;
export default connect(mapStateToProps)(Security);
