import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import useRoutes from "../hooks/use-routes";
import AuthLayout from "../layouts/auth";
// import MainLayout from "../layouts/main-layout";
// import NotFound from "../components/not-found/index";

const Routing = () => {
  const { authRoutes, privateRoutes, redirect } = useRoutes();
  return (
    <Routes>
      <Route element={<AuthLayout {...{ redirect }} />}>
        {authRoutes.map(({ id, ...otherData }) => (
          <Route index key={`auth_${id}`} {...otherData} />
        ))}
      </Route>
      {/* <Route element={<MainLayout {...{ redirect }} />}>
        {privateRoutes.length === 0 ? (
          <Route path="*" element={<Navigate to="/login" />} />
        ) : (
          privateRoutes.map(({ id, ...otherData }) => (
            <Route index key={`main_${id}`} {...otherData} />
          ))
        )}
      </Route> */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default Routing;
