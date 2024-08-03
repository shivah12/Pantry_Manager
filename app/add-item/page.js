"use client";
import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function AddItemPage() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const router = useRouter();

  const handleAddItem = async (e) => {
    e.preventDefault();

    if (name.trim() === "" || quantity.trim() === "") {
      alert("Both fields are required.");
      return;
    }

    try {
      await addDoc(collection(db, "items"), { name, quantity });
      router.push("/");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Failed to add item. Please try again.");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#ffffff", // White background
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Box
          width="400px"
          padding={3}
          border={1}
          borderColor="gray.300"
          borderRadius={2}
          bgcolor="white"
          boxShadow={3}
        >
          <Typography
            variant="h6"
            sx={{ textAlign: "center", color: "#000000" }} // Black text
            gutterBottom
          >
            Add New Item
          </Typography>
          <form onSubmit={handleAddItem}>
            <TextField
              label="Item Name"
              fullWidth
              margin="normal"
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{
                backgroundColor: "#ffffff", // White background
                color: "#000000", // Black text
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#000000", // Black border
                    borderWidth: "1px", // Border width
                  },
                  "&:hover fieldset": {
                    borderColor: "#000000", // Black border on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#000000", // Black border when focused
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "#000000", // Black label color
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#000000", // Black label color when focused
                },
                "& .MuiInputBase-root": {
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Drop shadow
                },
              }}
            />
            <TextField
              label="Quantity"
              fullWidth
              margin="normal"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              sx={{
                backgroundColor: "#ffffff", // White background
                color: "#000000", // Black text
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#000000", // Black border
                    borderWidth: "1px", // Border width
                  },
                  "&:hover fieldset": {
                    borderColor: "#000000", // Black border on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#000000", // Black border when focused
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "#000000", // Black label color
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#000000", // Black label color when focused
                },
                "& .MuiInputBase-root": {
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Drop shadow
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#00000",
                color: "#ffffff",
                "&:hover": {
                  backgroundColor: "#ffffff",
                  color:"black",
                },
              }}
              fullWidth
            >
              Add Item
            </Button>
          </form>
        </Box>
      </motion.div>
    </Box>
  );
}
