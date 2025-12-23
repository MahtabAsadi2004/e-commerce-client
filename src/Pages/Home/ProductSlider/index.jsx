import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import { Box, Button, Typography } from "@mui/material";
import fetchData from "../../../Utils/fetchData";
import { ProductSliderLoading } from "./ProductSliderLoading";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";

export default function ProductSlider() {
  const [products, setProducts] = useState();
  const navigate = useNavigate();
  const cardRef = useRef < HTMLDivElement > null;

  useEffect(() => {
    (async () => {
      const response = await fetchData(
        "products?populate=*&pagination[start]=0&pagination[limit]=8"
      );
      setProducts(response.data);
    })();
  }, []);

  if (!products) return <ProductSliderLoading />;
  
  const handleMouseEnter = (el) => {
    gsap.to(el, {
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out",
    });

    const img = el.querySelector("img");
    const info = el.querySelector(".product-info");

    if (img) {
      gsap.to(img, { scale: 1.1, duration: 0.3 });
    }

    if (info) {
      gsap.to(info, { y: -5, duration: 0.3 });
    }
  };

  const handleMouseLeave = (el) => {
    gsap.to(el, { scale: 1, duration: 0.3 });

    const img = el.querySelector("img");
    const info = el.querySelector(".product-info");

    if (img) {
      gsap.to(img, { scale: 1, duration: 0.3 });
    }

    if (info) {
      gsap.to(info, { y: 0, duration: 0.3 });
    }
  };

  const items = products?.map((product) => (
    <SwiperSlide
      ref={cardRef}
      key={product.id}
      style={{ cursor: "pointer" }}
      onMouseEnter={(e) => handleMouseEnter(e.currentTarget)}
      onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
      onClick={() =>
        navigate(
          `/product-details/${product.documentId}/${product.title
            .replaceAll(" ", "-")
            .toLowerCase()}`
        )
      }
    >
      <img
        src={import.meta.env.VITE_FILE_URL + product.image.url}
        alt={product.title}
      />

      <Box className="product-info">
        <h4>{product.title}</h4>
        <p>{product.category}</p>
        <p style={{ fontWeight: "bold", marginTop: "6px" }}>${product.price}</p>
      </Box>
    </SwiperSlide>
  ));

  return (
    <Box sx={{ margin: "48px 0" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 24px",
          marginBottom: "16px",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          Products
        </Typography>

        <Button
          variant="outlined"
          sx={{
            borderRadius: "8px",
            textTransform: "none",
            padding: "6px 16px",
            fontSize: "14px",
          }}
          onClick={() => navigate("/products")}
        >
          More Products
        </Button>
      </Box>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[FreeMode, Pagination, Navigation]}
        className="productSlider"
      >
        {items}
      </Swiper>
    </Box>
  );
}
