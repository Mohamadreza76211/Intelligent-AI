import React from "react";
import ChatAgent from "./components/ChatAgent";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ChatAgent />
    </ThemeProvider>
  );
};

export default App;
