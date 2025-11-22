import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material/styles";
import "./index.css";
import App from "./App.jsx";
// Create a basic MUI theme (non-responsive by default)
const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: "#1976d2",
      },
      secondary: {
        main: "#dc004e",
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
    typography: {
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
      ].join(","),
      h1: {
        fontSize: "2.5rem",
        fontWeight: 600,
        lineHeight: 1.2,
        "@media (max-width:600px)": {
          fontSize: "2rem",
        },
      },
      h2: {
        fontSize: "2rem",
        fontWeight: 600,
        lineHeight: 1.3,
        "@media (max-width:600px)": {
          fontSize: "1.75rem",
        },
      },
      h3: {
        fontSize: "1.75rem",
        fontWeight: 600,
        lineHeight: 1.4,
        "@media (max-width:600px)": {
          fontSize: "1.5rem",
        },
      },
      h4: {
        fontSize: "1.5rem",
        fontWeight: 500,
        lineHeight: 1.4,
        "@media (max-width:600px)": {
          fontSize: "1.25rem",
        },
      },
      h5: {
        fontSize: "1.25rem",
        fontWeight: 500,
        lineHeight: 1.5,
        "@media (max-width:600px)": {
          fontSize: "1.125rem",
        },
      },
      h6: {
        fontSize: "1.125rem",
        fontWeight: 500,
        lineHeight: 1.5,
        "@media (max-width:600px)": {
          fontSize: "1rem",
        },
      },
      body1: {
        fontSize: "1rem",
        lineHeight: 1.6,
        "@media (max-width:600px)": {
          fontSize: "0.9375rem",
        },
      },
      body2: {
        fontSize: "0.875rem",
        lineHeight: 1.6,
        "@media (max-width:600px)": {
          fontSize: "0.8125rem",
        },
      },
    },
  })
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);
