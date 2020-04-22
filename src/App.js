import React from "react";
import Routes from "./routes";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        overrides: {
          MuiLinearProgress: {
            root: {
              borderRadius: 3,
              overflow: "hidden",
            },
          },
          MuiListItemIcon: {
            root: {
              minWidth: 32,
            },
          },
          MuiChip: {
            root: {
              backgroundColor: "rgba(0,0,0,0.075)",
            },
          },
        },
        palette: {
          type: prefersDarkMode ? "dark" : "light",
          action: {
            active: "rgba(255, 255, 255, 0.54)",
            hover: "rgba(255, 255, 255, 0.04)",
            selected: "rgba(255, 255, 255, 0.08)",
            disabled: "rgba(255, 255, 255, 0.26)",
            disabledBackground: "rgba(255, 255, 255, 0.12)",
            focus: "rgba(255, 255, 255, 0.12)",
          },
          background: {
            default: "#282C34",
            dark: "#1c2025",
            paper: "#282C34",
          },
          primary: {
            main: "#605DB2",
          },
          secondary: {
            main: "#E53232",
          },
          text: {
            primary: "#e6e5e8",
            secondary: "#adb0bb",
          },
        },
      }),
    [prefersDarkMode]
  );
  return (
    <ThemeProvider theme={theme}>
      <Routes />;
    </ThemeProvider>
  );
}

export default App;
