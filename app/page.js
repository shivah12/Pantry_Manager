"use client";

import { Box, Button, TextField, Typography } from "@mui/material";
import PantryList from "../components/PantryList";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";
import { motion } from "framer-motion";
import "@fontsource/plus-jakarta-sans"; // Import the Plus Jakarta Sans font

export default function Home() {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const querySnapshot = await getDocs(collection(db, "items"));
      const itemsArray = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setItems(itemsArray);
    };

    fetchItems();
  }, []);

  useEffect(() => {
    setFilteredItems(
      items.filter(
        (item) =>
          item.name &&
          typeof item.name === "string" &&
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, items]);

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        color: (theme) => theme.palette.text.primary,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: { xs: 2, md: 4 },
        backgroundColor: (theme) => theme.palette.background.default,
        fontFamily: "Plus Jakarta Sans, sans-serif", // Apply the font globally
      }}
    >
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        sx={{
          width: "100%",
          maxWidth: "600px", // Limit the width for better alignment
          padding: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center", // Center-align text within the box
          backgroundColor: (theme) => theme.palette.background.paper,
          boxShadow: (theme) => theme.shadows[2],
          borderRadius: 2,
          mb: 4,
          fontFamily: "inherit", // Ensure font is applied
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            mb: 2,
            color: (theme) => theme.palette.primary.main,
            fontWeight: "bold",
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            fontFamily: "inherit", // Ensure font is applied
          }}
        >
          Pantry Tracker
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            mb: 2,
            justifyContent: "center",
            width: "100%", // Ensure elements are centered
          }}
        >
          <TextField
            label="Search Items"
            margin="normal"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{
              background: "#fff",
              borderRadius: 2,
              width: "100%", // Make input take full width
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "gray",
                },
                "&:hover fieldset": {
                  borderColor: "gray",
                },
                "&.Mui-focused fieldset": {
                  borderColor: (theme) => theme.palette.primary.main,
                },
              },
              "& .MuiInputLabel-root": {
                color: "gray",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: (theme) => theme.palette.primary.main,
              },
              fontFamily: "inherit", // Ensure font is applied
            }}
          />
          <Link href="/add-item" passHref>
            <Button
              variant="contained"
              color="primary"
              sx={{
                borderRadius: 3,
                height: 50,
                fontSize: { xs: "0.875rem", sm: "1rem" },
                width: "100%", // Full width for mobile, auto for larger screens
                boxShadow: (theme) => theme.shadows[3],
                fontFamily: "inherit", // Ensure font is applied
              }}
            >
              Add Item
            </Button>
          </Link>
        </Box>
      </Box>
      <PantryList items={filteredItems} />
      <Box
        sx={{
          width: "100%",
          textAlign: "center", // Center-align text in the footer
          padding: 2,
          backgroundColor: (theme) => theme.palette.background.default,
          mt: 4,
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: (theme) => theme.palette.text.secondary,
            fontFamily: "inherit", // Ensure font is applied
          }}
        >
          © 2024 Shreeti Mohapatra. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
