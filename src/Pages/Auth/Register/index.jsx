import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Form, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import {
  Box,
  TextField,
  Button,
  Typography,
  Link,
  Paper,
  Container,
  Alert,
  CircularProgress,
} from "@mui/material";
import notify from "../../../Utils/notify";

export default function Register({ handlePageType }) {
  const navigate = useNavigate();

  const schema = Yup.object({
    username: Yup.string("The entered format is incorrect").required(
      "Field value is required"
    ),
    email: Yup.string("The entered format is incorrect")
      .required("Field value is required")
      .email("The entered format is incorrect"),
    password: Yup.string("The entered format is incorrect").required(
      "Field value is required"
    ),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },

    validationSchema: schema,

    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_API_URL}auth/local/register`,
          values
        );
        console.log(res);
        if (res?.status == 200) {
          handlePageType("login");
          notify("success", "register successfully");
        }
        resetForm();
      } catch (error) {
        console.log(error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <Container component="main" maxWidth="xs" sx={{ minHeight: "80vh" }}>
      <Paper
        elevation={3}
        sx={{
          mt: 8,
          p: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Register
        </Typography>

        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          noValidate
          sx={{ mt: 3, width: "100%" }}
        >
          {formik.errors.general && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {formik.errors.general}
            </Alert>
          )}

          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            // autoFocus
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
            disabled={formik.isSubmitting}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            disabled={formik.isSubmitting}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            disabled={formik.isSubmitting}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={formik.isSubmitting || !formik.isValid}
          >
            {formik.isSubmitting ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Register"
            )}
          </Button>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="body2"
            color="text.secondary"
            onClick={handlePageType}
          >
            Already have an account?
            <Link
              component="button"
              variant="body2"
              onClick={handlePageType}
              sx={{ textDecoration: "none", marginLeft: "4px" }}
            >
              Login here
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}
