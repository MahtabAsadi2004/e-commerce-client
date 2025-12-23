import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

export default function Benefits() {
  return (
    <Stack
      flexDirection={"row"}
      gap={10}
      justifyContent={"center"}
      alignItems={"center"}
      margin={20}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(0, 0, 0, 1)",
            padding: "8px ",
            borderRadius: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "14px",
          }}
        >
          <LocalShippingIcon
            fontSize="large"
            sx={{ color: "rgba(255, 255, 255, 1)" }}
          />
        </Box>
        <Typography
          variant="subtitle1"
          fontWeight={600}
          fontSize={15}
          color="rgba(0, 0, 0, 1)"
        >
          FREE AND FAST DELIVERY
        </Typography>
        <Typography variant="body2" fontSize={11} color="rgba(0, 0, 0, 1)">
          Free delivery for all orders over $140
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(0, 0, 0, 1)",
            padding: "8px ",
            borderRadius: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "14px",
          }}
        >
          <HeadsetMicIcon
            fontSize="large"
            sx={{ color: "rgba(255, 255, 255, 1)" }}
          />
        </Box>
        <Typography
          variant="subtitle1"
          fontWeight={600}
          fontSize={15}
          color="rgba(0, 0, 0, 1)"
        >
          24/7 CUSTOMER SERVICE
        </Typography>
        <Typography variant="body2" fontSize={11} color="rgba(0, 0, 0, 1)">
          Friendly 24/7 customer support
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(0, 0, 0, 1)",
            padding: "8px ",
            borderRadius: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "14px",
          }}
        >
          <VerifiedUserIcon
            fontSize="large"
            sx={{ color: "rgba(255, 255, 255, 1)" }}
          />
        </Box>
        <Typography
          variant="subtitle1"
          fontWeight={600}
          fontSize={15}
          color="rgba(0, 0, 0, 1)"
        >
          MONEY BACK GUARANTEE
        </Typography>
        <Typography variant="body2" fontSize={11} color="rgba(0, 0, 0, 1)">
          We reurn money within 30 days
        </Typography>
      </Box>
    </Stack>
  );
}
