import { ICONS } from "../assets";

export const BASE_URL = "192.168.1.72:4000" 

export const ROLES = {
  SUPER_ADMIN: "super_admin",
  ADMIN: "admin",
  AGENT: "agent",
};

export const ROLE_OPTIONS = [
  { title: "Agent", value: ROLES.AGENT },
  { title: "Agency", value: ROLES.AGENCY },
  { title: "Admin", value: ROLES.ADMIN },
];

export const DRAWER_WIDTH = 250;
export const HEADER_HEIGHT = 64;

export const PROFILE_MENU = [
  {
    title: "Profile",
    path: "/profile",
    icon: <ICONS.PersonAdd />,
  },
  {
    title: "Setting",
    path: "/setting",
    icon: <ICONS.Setting />,
  },
  {
    title: "Log Out",
    path: "/log-out",
    icon: <ICONS.Logout />,
  },
];

export const ERROR_MESSAGES = {
  400: "Invalid request. Please try again.",
  401: "Please log in to continue.",
  403: "Access denied.",
  404: "The content does not exist.",
  408: "Request took too long. Try again.",
  422: "Invalid input. Please try again.",
  500: "Oops! Something went wrong. Try later.",
  502: "Connection issue. Try later.",
  503: "Service is down. Try later.",
  504: "Server took too long. Try again.",
  common: "Oops! Something went wrong. Try later.",
};

export const LOCAL_STORAGE_KEY = "support_agent";

export const NAME_REGEX = /^[a-zA-Z\s]+$/;
export const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
export const UPPERCASE_REGEX = /[A-Z]/;
export const LOWERCASE_REGEX = /[a-z]/;
export const NUMBER_REGEX = /[0-9]/;
export const SPACIAL_CHAR_REGEX = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
export const PASSWORD_LENGTH = 8;
export const MOBILE_REGEX = /^[0-9]+$/;

export const FEATURE_OPTION = [
  { value: 'audio', label: 'Audio' },
  { value: 'video', label: 'Video' },
  { value: 'chat', label: 'Chat' },
];

export const PLANS_DURATION = [
  { label: "Month", value: "month" },
  { label: "Year", value: "year" },
];

export const AGENT_LIMIT = Array.from({ length: 10 }, (_, i) => ({
  label: `${i + 1}`,
  value: (i + 1).toString(),
}));