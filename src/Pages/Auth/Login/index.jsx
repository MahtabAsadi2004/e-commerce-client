import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import notify from "../../../Utils/notify";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
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
import { login } from "../../../Store/Slice/AuthSlice";

export default function Login({ handlePageType }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const schema = Yup.object({
    identifier: Yup.string("The entered format is incorrect").required(
      "Field value is required"
    ),
    password: Yup.string("The entered format is incorrect").required(
      "Field value is required"
    ),
  });

  const formik = useFormik({
    initialValues: {
      identifier: "",
      password: "",
    },

    validationSchema: schema,

    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_API_URL}auth/local`,
          values
        );
        if (res?.status === 200) {
          dispatch(login(res.data));
          navigate("/");
          notify("success", "login successfully");
        }
        resetForm();
      } catch (error) {
        console.log(error);
        notify("error", "login failed");
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
          Login
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
            id="identifier"
            label="Username"
            name="identifier"
            autoComplete="username"
            // autoFocus
            value={formik.values.identifier}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.identifier && Boolean(formik.errors.identifier)
            }
            helperText={formik.touched.identifier && formik.errors.identifier}
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
              "Login"
            )}
          </Button>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="body2"
            color="text.secondary"
            onClick={handlePageType}
          >
            don't have an account?
            <Link
              component="button"
              variant="body2"
              onClick={handlePageType}
              sx={{ textDecoration: "none", marginLeft: "4px" }}
            >
              Register here
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}
