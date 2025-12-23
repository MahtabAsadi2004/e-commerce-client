import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography
        variant="h3"
        component="h1"
        sx={{
          fontWeight: 600,
          mb: 4,
          textAlign: "center",
        }}
      >
        About Us
      </Typography>

      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" sx={{ mb: 3, fontWeight: 500 }}>
          Our Story
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
          Welcome to our store! We're passionate about providing high-quality
          products at great prices. Our journey started with a simple idea: make
          online shopping easy, reliable, and enjoyable for everyone.
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
          We carefully select each product in our collection to ensure it meets
          our standards for quality and value. From electronics to fashion, home
          goods to accessories, we've got something for everyone.
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
          Thank you for choosing us. We're committed to making your shopping
          experience the best it can be.
        </Typography>
      </Box>

      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" sx={{ mb: 3, fontWeight: 500 }}>
          What We Value
        </Typography>
        <Box sx={{ pl: 2 }}>
          <Typography variant="body1" sx={{ mb: 2 }}>
            • <strong>Quality:</strong> Only the best products make it to our
            store
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            • <strong>Customer Service:</strong> We're here to help you
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            • <strong>Fair Prices:</strong> Great value for your money
          </Typography>
          <Typography variant="body1">
            • <strong>Easy Shopping:</strong> Simple, hassle-free experience
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          backgroundColor: "#f5f5f5",
          p: 4,
          borderRadius: 2,
          textAlign: "center",
        }}
      >
        <Typography variant="h5" sx={{ mb: 2, fontWeight: 500 }}>
          Get in Touch
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Have questions? We'd love to hear from you.
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Email: support@example.com
        </Typography>
        <Button variant="contained">Contact Us</Button>
      </Box>

      <Box sx={{ textAlign: "center", mt: 6 }}>
        <Button variant="outlined" onClick={() => navigate("/")}>
          Back to Home
        </Button>
      </Box>
    </Container>
  );
}
