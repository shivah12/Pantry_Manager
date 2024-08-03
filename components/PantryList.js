"use client";

import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { db } from "../firebase";
import { doc, deleteDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const PantryList = ({ items, setItems }) => {
  const router = useRouter();

  const handleDeleteItem = async (id) => {
    if (confirm("Are you sure you want to delete this item?")) {
      try {
        const docRef = doc(db, "items", id);
        await deleteDoc(docRef);
        window.location.reload();
      } catch (error) {
        console.error("Error deleting document: ", error);
        alert("Failed to delete item. Please try again.");
      }
    }
  };

  return (
    <Box
      sx={{
        width: { xs: "90%", sm: "80%", md: "70%", lg: "100%" },
        maxWidth: "100%",
        margin: "20px",
        padding: 2,
        display: "flex",
        flexDirection: "row", // Changed to row for horizontal layout
        flexWrap: "wrap", // Wraps items if they exceed container width
        alignItems: "flex-start", // Align items to the top
        gap: 2,
      }}
    >
      {items.length > 0 ? (
        items.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            style={{ flex: "1 1 calc(25% - 16px)", boxSizing: "border-box" }} // Increased width of the card
          >
            <Box
              border={1}
              borderColor={"#ddd"}
              borderRadius={2}
              padding={2}
              marginBottom={2}
              bgcolor={"#fff"} // Background color of the card
              color={"#000"} // Text color
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
              flexWrap="wrap"
              sx={{ boxSizing: "border-box" }}
            >
              <Box
                flex={1}
                display="flex"
                flexDirection="column"
                gap={1}
                minWidth={0} // Ensures text does not overflow
              >
                <Typography
                  variant="h4"
                  sx={{
                    color: "#000", // Text color
                    fontSize: { xs: "1.3rem", sm: "1.3rem", md: "1.3rem" },
                    overflow: "hidden", // Prevents overflow
                    textOverflow: "ellipsis", // Adds ellipsis if overflow occurs
                    whiteSpace: "nowrap", // Prevents text wrapping
                  }}
                >
                  {item.name}
                </Typography>
                <Typography
                  sx={{
                    color: "#000", // Text color
                    fontSize: {
                      xs: "0.95rem",
                      sm: "0.95rem",
                      md: "0.95rem",
                    },
                    overflow: "hidden", // Prevents overflow
                    textOverflow: "ellipsis", // Adds ellipsis if overflow occurs
                    whiteSpace: "nowrap", // Prevents text wrapping
                  }}
                >
                  Quantity: {item.quantity}
                </Typography>
              </Box>
              <Box
                display="flex"
                gap={1}
                flexDirection={{ xs: "column", sm: "row" }}
                alignItems={{ xs: "stretch", sm: "center" }}
                width={{ xs: "100%", sm: "auto" }}
                flexShrink={0} // Prevents shrinking of button area
              >
                <Link href={`/edit/${item.id}`}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#0ef",
                      color: "#001a33",
                      "&:hover": {
                        backgroundColor: "#0c8", // Change hover color
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                      },
                      width: { xs: "100%", sm: "auto" },
                    }}
                  >
                    Edit
                  </Button>
                </Link>
                <Button
                  variant="contained"
                  color="error"
                  sx={{
                    backgroundColor: "#dc3545",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "#c82333",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    },
                    width: { xs: "100%", sm: "auto" },
                  }}
                  onClick={() => handleDeleteItem(item.id)}
                >
                  Delete
                </Button>
              </Box>
            </Box>
          </motion.div>
        ))
      ) : (
        <Typography sx={{ color: "#000" }}>No items found</Typography>
      )}
    </Box>
  );
};

export default PantryList;
