import { Box, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../../Components/button";
import { ICONS } from "../../../assets";
import useSnackBar from "../../../hooks/use-snackbar";
// import { loginValidation } from "../../../utils/validations";
import { useFormik } from "formik";
// import { AuthContext } from "../../../context/AuthContext";
// import { api } from "../../../api";
import { theme } from "../../../utils/theme/index";
import CustomInput from "../../../Components/CustomInput";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { handleSnackbar } = useSnackBar();
  //   const { login } = useContext(AuthContext);

  const {
    handleChange,
    handleSubmit,
    touched,
    handleBlur,
    values,
    errors,
    isValidating,   
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    // validationSchema: loginValidation,
    onSubmit: async (values) => {
      // setIsLoading(true);
      //   try {
      //     const response = await api.auth.login({ data: values });
      //     const { result } = response.data;
      //     login(result); // Update the token in AuthContext
      //     handleSnackbar("success", "Login successful");
      //   } catch (error) {
      //     handleSnackbar("error", error?.data?.message);
      //   } finally {
      //     setIsLoading(false);
      //   }
    },
  });

  const handleLogin = () => {
    if (!isValidating) {
      handleSubmit();
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3.5 }}>
      <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
        <Typography variant="h4">Welcome Back</Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
        <CustomInput
          label="Email"
          type="email"
          name="email"
          fullWidth={true}
          onChange={handleChange}
          value={values.email}
          onBlur={handleBlur}
          error={touched.email && errors.email}
          helperText={touched.email && errors.email}
        />
        <CustomInput
          label="Password"
          type="password"
          name="password"
          fullWidth={true}
          onChange={handleChange}
          value={values.password}
          onBlur={handleBlur}
          error={touched.password && errors.password}
          helperText={touched.password && errors.password}
        />
        <Typography variant="subtitle1" sx={{ textAlign: "right" }}>
          <Link
          to="/forgot-password"
          style={{
            textDecoration: "none",
            cursor: "pointer",
            color: theme.palette.primary.main,
          }}
        >
          Forgot Password ?
        </Link>
        </Typography>
        <Button
        fullWidth={true}
        variant="contained"
        title="Login"
        endIcon={<ICONS.Dashboard />}
        onClick={handleLogin}
        loading={isLoading}
      />
      </Box>
    </Box>
  );
};

export default LoginForm;
