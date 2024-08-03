"use client";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useRouter } from "next/router";

const AddItemForm = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "items"), { name, quantity });
    router.push("/");
  };

  return (
    <Box
      width="400px"
      padding={3}
      margin="auto"
      border={1}
      borderColor="gray.300"
      borderRadius={2}
      bgcolor="white"
      boxShadow={3}
    >
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          color: "black",
          fontWeight: "bold",
          fontSize: "1.25rem",
          textAlign: "center",
        }}
      >
        Add New Item
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Item Name"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{
            bgcolor: "white",
            borderRadius: 1,
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "gray",
              },
              "&:hover fieldset": {
                borderColor: "gray",
              },
              "&.Mui-focused fieldset": {
                borderColor: "black",
              },
            },
            "& .MuiInputLabel-root": {
              color: "gray",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "black",
            },
            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
          }}
        />
        <TextField
          label="Quantity"
          fullWidth
          margin="normal"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          sx={{
            bgcolor: "white",
            borderRadius: 1,
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "gray",
              },
              "&:hover fieldset": {
                borderColor: "gray",
              },
              "&.Mui-focused fieldset": {
                borderColor: "black",
              },
            },
            "& .MuiInputLabel-root": {
              color: "gray",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "black",
            },
            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
          }}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Add Item
        </Button>
      </form>
    </Box>
  );
};

export default AddItemForm;
