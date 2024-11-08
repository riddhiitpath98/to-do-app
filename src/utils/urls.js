import { ROLES } from "./constants";

export const PAGES = {
  INITIAL_LOGIN: {
    id: "initial_login",
    path: "/",
    name: "Login",
  },
  LOGIN: {
    id: "login",
    path: "/",
    name: "Login",
  },
  REGISTER: {
    id: "register",
    path: "/register",
    name: "Register",
  },
  FORGOT_PASSWORD: {
    id: "forgot_password",
    path: "/forgot-password",
    name: "Forgot password",
  },
  RESET_PASSWORD:{
    id: "reset_password",
    path: "/reset-password",
    name: "Reset password",
  },
  // AGENCY: {
  //   id: "agency",
  //   path: "/agency",
  //   name: "Agency",
  //   roles: [ROLES.ADMIN, ROLES.SUPER_ADMIN],
  // },
  // AGENT: {
  //   id: "agent",
  //   path: "/agent",
  //   name: "Agent",
  //   roles: [ROLES.ADMIN, ROLES.SUPER_ADMIN],
  // },
  // CLIENT: {
  //   id: "client",
  //   path: "/client",
  //   name: "Client",
  //   roles: [ROLES.AGENT, ROLES.SUPER_ADMIN],
  // },
  SUPER_ADMIN_DASHBOARD: {
    id: "super_admin_dashboard",
    path: "/super-admin/dashboard",
    name: "Super Admin Dashboard",
    roles: [ROLES.SUPER_ADMIN],
  },
  ADMIN_DASHBOARD: {
    id: "admin_dashboard",
    path: "/admin/dashboard",
    name: "Admin Dashboard",
    roles: [ROLES.ADMIN],
  },
  SUPER_ADMIN_AGENCY: {
    id: "super_admin_agency",
    path: "/super-admin/agency",
    name: "Super Admin Agency",
    roles: [ROLES.SUPER_ADMIN],
  },
  ADMIN_AGENT: {
    id: "admin_agent",
    path: "/admin/agent",
    name: "Admin Agent",
    roles: [ROLES.ADMIN],
  },
  SETTING: {
    id: "setting",
    path: "/setting",
    name: "Setting",
    roles: [ROLES.SUPER_ADMIN, ROLES.ADMIN],
  },
  SUPER_ADMIN_AGENT:{
    id: "super_admin_agent",
    path: "/super-admin/agent",
    name: "Super Admin Agent",
    roles: [ROLES.SUPER_ADMIN],
  },
  SUPER_ADMIN_PLANS:{
    id: "super_admin_plans",
    path: "/super-admin/plans",
    name: "Super Admin Plans",
    roles: [ROLES.SUPER_ADMIN],
  }
};
