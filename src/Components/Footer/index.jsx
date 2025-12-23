import {
  Box,
  Container,
  Typography,
  Link,
  Stack,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import { Facebook, Twitter, Instagram, Email } from "@mui/icons-material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#000",
        color: "#fff",
        borderTop: "1px solid",
        borderColor: "divider",
        py: 6,
        "& .MuiInputBase-input": { color: "#fff" },
        "& .MuiInputLabel-root": { color: "#fff" },
        "& input::placeholder": { color: "#ddd" },
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={4} sx={{ mb: 4 }}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={4}
            justifyContent="space-between"
          >
            <Box sx={{ maxWidth: 300 }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "1.3rem", sm: "1.5rem" },
                  mb: 2,
                }}
              >
                Exclusive
              </Typography>
              <Typography variant="body2" color="#fff" sx={{ mb: 2 }}>
                Your one-stop destination for exclusive products and amazing
                deals. Shop the latest trends with confidence.
              </Typography>
              <Stack direction="row" spacing={1}>
                <IconButton
                  size="small"
                  sx={{
                    color: "#fff",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  <Facebook fontSize="small" />
                </IconButton>
                <IconButton
                  size="small"
                  sx={{
                    color: "#fff",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  <Twitter fontSize="small" />
                </IconButton>
                <IconButton
                  size="small"
                  sx={{
                    color: "#fff",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  <Instagram fontSize="small" />
                </IconButton>
                <IconButton
                  size="small"
                  sx={{
                    color: "#fff",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  <Email fontSize="small" />
                </IconButton>
              </Stack>
            </Box>

            <Stack direction="row" spacing={6}>
              <Stack spacing={2}>
                <Typography
                  variant="h6"
                  sx={{ fontSize: "1.1rem", fontWeight: 600, mb: 1 }}
                >
                  Support
                </Typography>
                <Link
                  href="/#"
                  color="#fff"
                  underline="none"
                  sx={{ "&:hover": { color: "primary.main" } }}
                >
                  Contact Us
                </Link>
                <Link
                  href="/#"
                  color="#fff"
                  underline="none"
                  sx={{ "&:hover": { color: "primary.main" } }}
                >
                  Shipping Info
                </Link>
                <Link
                  href="/#"
                  color="#fff"
                  underline="none"
                  sx={{ "&:hover": { color: "primary.main" } }}
                >
                  Returns
                </Link>
                <Link
                  href="/#"
                  color="#fff"
                  underline="none"
                  sx={{ "&:hover": { color: "primary.main" } }}
                >
                  FAQ
                </Link>
              </Stack>

              <Stack spacing={2}>
                <Typography
                  variant="h6"
                  sx={{ fontSize: "1.1rem", fontWeight: 600, mb: 1 }}
                >
                  Company
                </Typography>
                <Link
                  href="/#"
                  color="#fff"
                  underline="none"
                  sx={{ "&:hover": { color: "primary.main" } }}
                >
                  About Us
                </Link>
                <Link
                  href="/#"
                  color="#fff"
                  underline="none"
                  sx={{ "&:hover": { color: "primary.main" } }}
                >
                  Careers
                </Link>
                <Link
                  href="/#"
                  color="#fff"
                  underline="none"
                  sx={{ "&:hover": { color: "primary.main" } }}
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/#"
                  color="#fff"
                  underline="none"
                  sx={{ "&:hover": { color: "primary.main" } }}
                >
                  Terms of Service
                </Link>
              </Stack>
            </Stack>

            <Box sx={{ maxWidth: 300 }}>
              <Typography
                variant="h6"
                sx={{ fontSize: "1.1rem", fontWeight: 600, mb: 2 }}
              >
                Newsletter
              </Typography>
              <Typography variant="body2" color="#fff" sx={{ mb: 2 }}>
                Subscribe to get special offers, free giveaways, and exclusive
                deals.
              </Typography>
              <Stack direction="row" spacing={1}>
                <TextField
                  size="small"
                  placeholder="Enter your email"
                  sx={{
                    flex: 1,
                    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "white",
                      },
                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                      {
                        borderColor: "white",
                      },
                  }}
                />
                <Button variant="contained" size="small">
                  Subscribe
                </Button>
              </Stack>
            </Box>
          </Stack>

          <Box sx={{ borderTop: 1, borderColor: "divider", pt: 3 }} />

          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Typography
              variant="body2"
              color="#fff"
              sx={{ textAlign: { xs: "center", sm: "left" } }}
            >
              © 2025 Exclusive. All rights reserved.
            </Typography>

            <Stack direction="row" spacing={3}>
              <Link
                href="/#"
                color="#fff"
                underline="none"
                sx={{
                  fontSize: "0.8rem",
                  "&:hover": { color: "primary.main" },
                }}
              >
                Privacy Policy
              </Link>
              <Link
                href="/#"
                color="#fff"
                underline="none"
                sx={{
                  fontSize: "0.8rem",
                  "&:hover": { color: "primary.main" },
                }}
              >
                Terms of Service
              </Link>
              <Link
                href="/#"
                color="#fff"
                underline="none"
                sx={{
                  fontSize: "0.8rem",
                  "&:hover": { color: "primary.main" },
                }}
              >
                Cookies
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
