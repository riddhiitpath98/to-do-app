import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Box, Container, Grid } from "@mui/material";
import { IMAGES } from "../../assets";
import withAuthRedirect from "../../hocs/with-auth-redirect";

const AuthLayout = ({ redirect, ...props }) => {
  return (
    <WithAuthRedirect {...props} replace {...{ to: redirect }}>
      <Grid
        container
        columns={12}
        sx={{
          height: "100vh",
          background: "linear-gradient(to bottom right, #fafafa, #f0f0f0)",
        }}
      >
        {/* <Grid
          item
          xs={0}
          sm={7}
          sx={{ height: "100%", display: { xs: "none", sm: "flex" } }}
        >
          <Box
            component="img"
            // src={IMAGES.AuthBg}
            alt="Bg"
            sx={{ height: "100%", width: "100%", objectFit: "contain"}}
          />
        </Grid> */}
        <Grid item xs={12}>
          <Container
            maxWidth="xs"
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 7,
            }}
          >
            <Box
              sx={{
                width: "100%",
                padding: "3rem",
                backgroundColor: "white",
                borderRadius: "8px",
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)",
              }}
            >
              <Box sx={{ width: "100%" }}>
                <Box
                  component="img"
                  src={IMAGES.Logo}
                  alt="Logo"
                  sx={{ maxHeight: "65px", display: "flex", margin : "auto", marginBottom: "2rem"}}
                />
              </Box>
              <Outlet />
            </Box>
          </Container>
          {/* <Stack
              sx={{
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            ></Stack> */}
        </Grid>
      </Grid>
    </WithAuthRedirect>
  );
};

export default AuthLayout;

const WithAuthRedirect = withAuthRedirect(({ children }) => children, Navigate);
