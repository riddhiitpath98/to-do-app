import AuthBg from "./images/Auth.jpg";
import Logo from "./images/logos/logo.png"
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import { Logout, PersonAdd, Settings } from "@mui/icons-material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
// import { CiSearch } from "react-icons/ci";
// import { FaFilter } from "react-icons/fa";
// import { BsThreeDotsVertical } from "react-icons/bs";
// import { HiUserAdd } from "react-icons/hi";
// import { MdOutlineDeleteForever } from "react-icons/md";
// import { MdModeEdit } from "react-icons/md";
// import { GrFormView } from "react-icons/gr";
// import { MdOutlineSupportAgent } from "react-icons/md";



export const IMAGES = { AuthBg, Logo };

export const ICONS = {
  Dashboard: DashboardIcon,
  Shopping: ShoppingCartIcon,
  People: PeopleIcon,
  BarChart: BarChartIcon,
  Logout: Logout,
  PersonAdd: PersonAdd,
  Setting: Settings,
  Visibility: Visibility,
  VisibilityOff: VisibilityOff,
  Admin: SupervisorAccountIcon,
  // Search: CiSearch,
  // Filter: FaFilter,
  // Action: BsThreeDotsVertical,
  // AddUser:HiUserAdd,
  // Delete:MdOutlineDeleteForever,
  // Edit:MdModeEdit,
  // View:GrFormView,
  // Agent:MdOutlineSupportAgent
};
