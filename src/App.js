// import logo from "./logo.svg";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material";
// import LoginForm from "./Containers/Auth/Login";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import Routing from "./routes";
function App() {
  const theme = createTheme();

  return (
    <ThemeProvider {...{ theme }}>
      <SnackbarProvider maxSnack={1}>
        {/* <Provider {...{ store }}> */}
          {/* <ContextProvider> */}
            <BrowserRouter>
              <Routing />
            </BrowserRouter>
          {/* </ContextProvider> */}
        {/* </Provider> */}
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
