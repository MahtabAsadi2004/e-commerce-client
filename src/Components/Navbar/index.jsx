import {
  AppBar,
  Badge,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Store/Slice/AuthSlice";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const cartLength = useSelector((state) => state.cart.items).length;
  const dispatch = useDispatch();

  return (
    <>
      <AppBar
        position="sticky"
        sx={{ backgroundColor: "black", color: "white" }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            px: { xs: 2, sm: 3, md: 4 },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.5rem" },
            }}
          >
            Exclusive
          </Typography>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: { md: "24px", lg: "32px" },
              alignItems: "center",
            }}
          >
            <Link
              to="/"
              color="white"
              underline="none"
              sx={{
                fontSize: { md: "0.9rem", lg: "1rem" },
                "&:hover": { color: "primary.main" },
              }}
              style={{
                color: "white",
                fontSize: { md: "0.9rem", lg: "1rem" },
                ":hover": { color: "rgba(42, 107, 231, 0.8)" },
              }}
            >
              Home
            </Link>
            <Link
              to="/about"
              color="white"
              underline="none"
              sx={{
                fontSize: { md: "0.9rem", lg: "1rem" },
                "&:hover": { color: "primary.main" },
              }}
              style={{
                color: "white",
                fontSize: { md: "0.9rem", lg: "1rem" },
                ":hover": { color: "rgba(42, 107, 231, 0.8)" },
              }}
            >
              About
            </Link>
            <Link
              to="/products"
              color="white"
              underline="none"
              sx={{
                fontSize: { md: "0.9rem", lg: "1rem" },
                "&:hover": { color: "primary.main" },
              }}
              style={{
                color: "white",
                fontSize: { md: "0.9rem", lg: "1rem" },
                ":hover": { color: "rgba(42, 107, 231, 0.8)" },
              }}
            >
              Products
            </Link>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 1, sm: 2 },
            }}
          >
            <Link
              to="/cart"
              aria-label="cart"
              size={window.innerWidth < 600 ? "small" : "medium"}
              sx={{
                "&:hover": { color: "primary.main !important" },
              }}
            >
              <Badge badgeContent={cartLength} color="error">
                <ShoppingCartIcon
                  fontSize={window.innerWidth < 600 ? "small" : "medium"}
                  sx={{ color: "white", "&:hover": { color: "primary.main" } }}
                />
              </Badge>
            </Link>

            {token ? (
              <Button
                variant="contained"
                size={window.innerWidth < 600 ? "small" : "medium"}
                color="error"
                sx={{
                  display: { xs: "none", sm: "block" },
                  fontSize: { xs: "0.8rem", sm: "0.9rem" },
                }}
                onClick={() => dispatch(logout())}
              >
                Logout
              </Button>
            ) : (
              <Button
                variant="contained"
                size={window.innerWidth < 600 ? "small" : "medium"}
                sx={{
                  display: { xs: "none", sm: "block" },
                  fontSize: { xs: "0.8rem", sm: "0.9rem" },
                }}
                onClick={() => navigate("/auth")}
              >
                Login
              </Button>
            )}

            <IconButton
              edge="end"
              aria-label="menu"
              onClick={() => setOpen(!open)}
              sx={{ display: { xs: "flex", md: "none" } }}
              size={window.innerWidth < 600 ? "small" : "medium"}
            >
              <MenuIcon sx={{ color: "white" }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: { xs: 280, sm: 300 },
          },
        }}
      >
        <Box sx={{ p: 2, borderBottom: 1, borderColor: "divider" }}>
          <Typography variant="h6" fontWeight="bold">
            Menu
          </Typography>
        </Box>

        <List>
          <ListItem disablePadding>
            <ListItemButton
              to="/"
              onClick={() => setOpen(false)}
              sx={{
                py: 2,
                "&:hover": { backgroundColor: "action.hover" },
              }}
            >
              <ListItemText
                primary="Home"
                primaryTypographyProps={{
                  fontSize: "1.1rem",
                  fontWeight: 500,
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              to="/about"
              onClick={() => setOpen(false)}
              sx={{
                py: 2,
                "&:hover": { backgroundColor: "action.hover" },
              }}
            >
              <ListItemText
                primary="About"
                primaryTypographyProps={{
                  fontSize: "1.1rem",
                  fontWeight: 500,
                }}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              to="/products"
              onClick={() => setOpen(false)}
              sx={{
                py: 2,
                "&:hover": { backgroundColor: "action.hover" },
              }}
            >
              <ListItemText
                primary="Products"
                primaryTypographyProps={{
                  fontSize: "1.1rem",
                  fontWeight: 500,
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>

        <Box sx={{ p: 2, mt: "auto" }}>
          <Button
            variant="contained"
            fullWidth
            size="large"
            onClick={() => setOpen(false)}
            sx={{
              py: 1.5,
              fontSize: "1rem",
            }}
          >
            Login
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
