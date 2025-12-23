import {
  Box,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  Button,
  Divider,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, clearCart } from "../../Store/Slice/CartSlice";
import { Delete, Add, Remove, ShoppingCart } from "@mui/icons-material";

export default function Cart() {
  const { items, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  console.log(items);

  if (items?.length === 0) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          py: 8,
          textAlign: "center",
        }}
      >
        <ShoppingCart sx={{ fontSize: 60, color: "grey.400", mb: 2 }} />
        <Typography variant="h5" color="text.secondary" gutterBottom>
          Your cart is empty
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Add some items to get started
        </Typography>
      </Box>
    );
  }

  const tItems = items?.map((item) => (
    <TableRow
      key={item?.id}
      sx={{
        "&:hover": {
          backgroundColor: "action.hover",
        },
        "&:last-child td, &:last-child th": { border: 0 },
      }}
    >
      <TableCell>
        <Typography variant="body1" fontWeight="medium">
          {item?.title}
        </Typography>
      </TableCell>
      <TableCell>
        <Box
          sx={{
            width: 80,
            height: 80,
            borderRadius: 1,
            overflow: "hidden",
            bgcolor: "grey.100",
          }}
        >
          <img
            src={`${import.meta.env.VITE_FILE_URL}${item?.image.url}`}
            alt={item?.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
      </TableCell>
      <TableCell align="center">
        <Typography variant="body1" color="primary.main" fontWeight="medium">
          ${item?.price.toFixed(2)}
        </Typography>
      </TableCell>
      <TableCell align="center">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={1}
        >
          <IconButton
            onClick={() => dispatch(removeItem(item?.id))}
            size="small"
            color="primary"
            disabled={item?.cartQuantity <= 1}
          >
            <Remove fontSize="small" />
          </IconButton>
          <Typography
            variant="body1"
            sx={{
              minWidth: 36,
              textAlign: "center",
              fontWeight: "medium",
            }}
          >
            {item.cartQuantity}
          </Typography>
          <IconButton
            onClick={() => dispatch(addItem(item))}
            disabled={item?.cartQuantity >= item?.quantity}
            size="small"
            color="primary"
          >
            <Add fontSize="small" />
          </IconButton>
        </Stack>
        {item?.cartQuantity >= item?.quantity && (
          <Typography
            variant="caption"
            color="error"
            sx={{ display: "block", mt: 0.5 }}
          >
            Max stock reached
          </Typography>
        )}
      </TableCell>
      <TableCell align="center">
        <Typography variant="body1" fontWeight="bold" color="success.main">
          ${(item?.price * item?.cartQuantity).toFixed(2)}
        </Typography>
      </TableCell>
      <TableCell align="center">
        <IconButton
          onClick={() => dispatch(removeItem(item?.id))}
          color="error"
          size="small"
        >
          <Delete />
        </IconButton>
      </TableCell>
    </TableRow>
  ));

  return (
    <Paper elevation={0} sx={{ p: 3, borderRadius: 2 }}>
      <Typography variant="h5" gutterBottom fontWeight="bold">
        Shopping Cart
      </Typography>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: "grey.50" }}>
              <TableCell sx={{ fontWeight: "bold" }}>Product</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Image</TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                Price
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                Quantity
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                Total
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{tItems}</TableBody>
        </Table>
      </TableContainer>

      <Divider sx={{ my: 3 }} />

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <Button
          variant="outlined"
          color="error"
          startIcon={<Delete />}
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </Button>
      </Stack>
    </Paper>
  );
}
