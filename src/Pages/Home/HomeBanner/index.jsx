import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HomeBanner() {
  const navigate = useNavigate();

  const initialTime = 22 * 3600 + 47 * 60 + 20;

  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    if (time <= 0) return;

    const timer = setInterval(() => {
      setTime((time) => time - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  return (
    <Stack
      sx={{
        height: "70vh",
        width: "90%",
        margin: "32px auto",
        borderRadius: "10px",
        overflow: "hidden !important",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          background:
            "linear-gradient(165deg,rgba(0, 0, 0, 1) 9%, rgba(10, 10, 10, 0.93) 100%)",
          width: "40%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "16px",
          padding: "24px",
        }}
      >
        <Typography
          variant="h4"
          color="rgba(255, 255, 255, 1)"
          fontWeight={600}
        >
          Enhance Your Music Experience
        </Typography>

        <Box sx={{ display: "flex", gap: "16px" }}>
          <Box
            sx={{
              backgroundColor: "rgba(255, 255, 255, 1)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              padding: "28px !important",
            }}
          >
            <Typography variant="subtitle1" color="rgba(7, 97, 187, 1)">
              {String(hours).padStart(2, "0")}
            </Typography>
            <Typography
              variant="body2"
              fontSize={10}
              color="rgba(7, 97, 187, 1)"
            >
              Hours
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: "rgba(255, 255, 255, 1)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              padding: "28px !important",
            }}
          >
            <Typography variant="subtitle1" color="rgba(7, 97, 187, 1)">
              {String(minutes).padStart(2, "0")}
            </Typography>
            <Typography
              variant="body2"
              fontSize={10}
              color="rgba(7, 97, 187, 1)"
            >
              Minutes
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: "rgba(255, 255, 255, 1)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              padding: "28px !important",
            }}
          >
            <Typography variant="subtitle1" color="rgba(7, 97, 187, 1)">
              {String(seconds).padStart(2, "0")}
            </Typography>
            <Typography
              variant="body2"
              fontSize={10}
              color="rgba(7, 97, 187, 1)"
            >
              Seconds
            </Typography>
          </Box>
        </Box>

        <Button
          variant="contained"
          sx={{
            width: "100px",
            borderRadius: "5px",
            textTransform: "none",
            padding: "6px 12px",
            fontSize: "14px",
          }}
          onClick={() =>
            navigate(
              `/product-details/nah9smzadmvpnkjrxh0bj8og/jbl-bluetooth-speaker-`
            )
          }
        >
          Buy Now!
        </Button>
      </Box>

      <Box sx={{ height: "100%", width: "60%", overflow: "hidden" }}>
        <img
          src="./Caixa De Som Boombox 3 Bluetooth Preta Jbl Bivolt.jpg"
          alt=""
          style={{ height: "100%", width: "100%", overflow: "hidden" }}
        />
      </Box>
    </Stack>
  );
}
