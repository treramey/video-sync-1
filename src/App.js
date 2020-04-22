import React from "react";
import Routes from "./routes";

// import useMediaQuery from "@material-ui/core/useMediaQuery";
import { ThemeProvider } from "@material-ui/core/styles";
import { createTheme } from "./theme/Theme";

function App() {
  return (
    <ThemeProvider theme={createTheme()}>
      <Routes />;
    </ThemeProvider>
  );
}

export default App;
