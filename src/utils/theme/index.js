import { createTheme } from "@mui/material";
import { palette } from "./palette";
import { typography } from "./typography";
import { componentsStyle } from "./components-style";

const defaultTheme = createTheme({ palette });

export const theme = createTheme({
  ...defaultTheme,
  typography: typography(defaultTheme),
  components: componentsStyle(defaultTheme),
});
