import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "#7C5CFC",
    },

    secondary: {
      main: "#21D4A7",
    },

    background: {
      default: "#0F1117",
      paper: "#181B23",
    },

    text: {
      primary: "#F4F5F7",
      secondary: "#9CA3AF",
    },
  },

  typography: {
    fontFamily: '"Inter", "Roboto", "Arial", sans-serif',

    h4: {
      fontWeight: 700,
    },

    h6: {
      fontWeight: 600,
    },

    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },

  shape: {
    borderRadius: 12,
  },

  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          border: "1px solid rgba(255,255,255,0.06)",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});

export default theme;