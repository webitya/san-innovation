"use client"

import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"

export function ThemeProvider({ children }) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "rgb(25, 118, 210)",
      },
      secondary: {
        main: "rgb(103, 58, 183)",
      },
      success: {
        main: "rgb(76, 175, 80)",
      },
      error: {
        main: "rgb(244, 67, 54)",
      },
      warning: {
        main: "rgb(255, 193, 7)",
      },
      info: {
        main: "rgb(3, 169, 244)",
      },
    },
    typography: {
      fontFamily: "Inter, sans-serif",
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            borderRadius: "6px",
            fontWeight: 500,
          },
        },
      },
    },
  })

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}
