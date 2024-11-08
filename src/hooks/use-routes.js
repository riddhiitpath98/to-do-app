import { useCallback, useContext, useMemo } from "react";
// import { AuthContext } from "../context/AuthContext";
// import ForgotPassword from "../container/auth/forgot-password/index";
import { ROLES } from "../utils/constants";
import { PAGES } from "../utils/urls";
import LoginForm from "../Containers/Auth/Login";
// import Setting from "../container/dashboard/setting";
// import Register from "../container/auth/register";
// import SuperAdminDashboard from "../container/dashboard/super-admin";
// import AdminDashboard from "../container/dashboard/admin";
// import SuperAdminAgent from "../container/dashboard/super-admin/agent";
// import SuperAdminAgency from "../container/dashboard/super-admin/admin";
// import AdminAgent from "../container/dashboard/admin/agent";
// import ResetPassword from "../container/auth/reset-password";
// import SuperAdminPlans from "../container/dashboard/super-admin/plans";

const useRoutes = () => {
  // const { role } = useContext(AuthContext);

  const redirect = useMemo(() => {
    if ("user" === ROLES.SUPER_ADMIN) {
      return PAGES.SUPER_ADMIN_DASHBOARD.path;
    }
    if ("user" === ROLES.ADMIN) {
      return PAGES.ADMIN_DASHBOARD.path;
    }
    // if (role === ROLES.AGENT) {
    //   return PAGES.CLIENT.path;
    // }
  }, []);

  const routes = useMemo(
    () => [
      // {
      //   ...PAGES.INITIAL_LOGIN,
      //   element: <Login />,
      //   isAuth: true,
      // },
      {
        ...PAGES.LOGIN,
        element: <LoginForm />,
        isAuth: true,
      },
      // {
      //   ...PAGES.REGISTER,
      //   element: <Register />,
      //   isAuth: true,
      // },
      // {
      //   ...PAGES.FORGOT_PASSWORD,
      //   element: <ForgotPassword />,
      //   isAuth: true,
      // },
      // {
      //   ...PAGES.RESET_PASSWORD,
      //   element: <ResetPassword />,
      //   isAuth: true,
      // },
      // {
      //   ...PAGES.AGENT,
      //   element: <Agent />,
      //   isPrivate: true,
      // },
      // {
      //   ...PAGES.SUPER_ADMIN_DASHBOARD,
      //   element: <SuperAdminDashboard />,
      //   isPrivate: true,
      // },
      // {
      //   ...PAGES.ADMIN_DASHBOARD,
      //   element: <AdminDashboard />,
      //   isPrivate: true,
      // },
      // {
      //   ...PAGES.SUPER_ADMIN_AGENCY,
      //   element: <SuperAdminAgency />,
      //   isPrivate: true,
      // },
      // {
      //   ...PAGES.ADMIN_AGENT,
      //   element: <AdminAgent />,
      //   isPrivate: true,
      // },
      // {
      //   ...PAGES.SUPER_ADMIN_AGENT,
      //   element: <SuperAdminAgent />,
      //   isPrivate: true,
      // },
      // {
      //   ...PAGES.SETTING,
      //   element: <Setting />,
      //   isPrivate: true,
      // },
      // {
      //   ...PAGES.SUPER_ADMIN_PLANS,
      //   element: <SuperAdminPlans />,
      //   isPrivate: true,
      // },
    ],
    []
  );

  const isAccessible = useCallback((data = [], currentRole) => {
    return data.map((value) => value === currentRole).some((val) => val);
  }, []);

  const authRoutes = useMemo(() => {
    return routes.filter((val) => val.isAuth);
  }, [routes]);

  const privateRoutes = useMemo(() => {
    return routes.filter(
      (val) => val.isPrivate && isAccessible(val.roles, "user")
    );
  }, [isAccessible, routes]);

  return {
    routes,
    authRoutes,
    privateRoutes,
    redirect,
  };
};

export default useRoutes;
