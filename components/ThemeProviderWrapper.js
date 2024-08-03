"use client";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box, CssBaseline } from "@mui/material";
import Image from "next/image"; // Import Next.js Image component
import "@fontsource/plus-jakarta-sans"; // Import the Plus Jakarta Sans font

const theme = createTheme({
  palette: {
    primary: {
      main: "#000", // Black for primary color
    },
    secondary: {
      main: "#ccc", // Light gray for secondary color
    },
    background: {
      default: "#fff", // White for background
    },
    text: {
      primary: "#000", // Black for primary text color
      secondary: "#333", // Darker gray for secondary text color
    },
  },
  typography: {
    fontFamily: "Plus Jakarta Sans, sans-serif", // Apply Plus Jakarta Sans font
  },
});

export default function ThemeProviderWrapper({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
          fontFamily: theme.typography.fontFamily,
          display: "flex",
          justifyContent: "flex-start", // Align container to the left
          alignItems: "flex-start", // Align content to the top
          padding: 2,
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 600, // Limit the width for the details container
            padding: 4,
            backgroundColor: "#fff", // White background for the container
            borderRadius: 4,
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle drop shadow
            border: "1px solid #ccc", // Grey stroke around the container
            fontFamily: "inherit", // Ensure font is applied
            margin: 0, // Remove any default margin
            flexGrow: 1, // Allow the container to take available space
          }}
        >
          {children}
        </Box>
        <Box
          sx={{
            marginLeft: 4, // Add some spacing between the content and the image
            display: "flex",
            alignItems: "center", // Vertically center the image
            flexGrow: 1, // Allow the image to take available space
          }}
        >
          <Image
            src="/sapiens.svg" // Path to the SVG in the public folder
            alt="Sapiens Illustration"
            layout="responsive" // Ensure the image scales with the container
            width={600} // Match width to container maxWidth
            height={600} // Adjust height proportionally
            style={{
              maxWidth: "100%",
              height: "auto",
              objectFit: "contain", // Ensure the image fits within the container
            }}
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
