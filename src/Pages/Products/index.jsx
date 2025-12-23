import React, { useEffect, useState } from "react";
import fetchData from "../../Utils/fetchData";
import { Box, Pagination, Typography } from "@mui/material";
import ProductCard from "./ProductCard";
import { ProductSliderLoading } from "../Home/ProductSlider/ProductSliderLoading";

export default function Products() {
  const [products, setProducts] = useState();
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      const response = await fetchData(
        `products?populate=*&pagination[page]=${page}&pagination[pageSize]=9`
      );
      setProducts(response.data);
    })();
  }, [page]);

  const items = products?.map((item) => (
    <ProductCard key={item.id} product={item} />
  ));

  if (!products) return <ProductSliderLoading />;

  return (
    <>
      <Typography
        variant="h3"
        fontSize="1.6rem"
        sx={{ width: "100%", margin: "24px auto", textAlign: "center" }}
      >
        Products
      </Typography>
      <Box
        sx={{
          display: "grid",
          width: "98%",
          margin: "24px auto",
          padding: { xs: "20px 10px", md: "24px 2%" },
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2,1fr)",
            md: "repeat(3,1fr)",
            lg: "repeat(4,1fr)",
          },
          gap: "24px",
          borderRadius: "10px",
        }}
      >
        {items}
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Pagination
          count={3}
          page={page}
          onChange={(e, value) => {
            setPage(value);
          }}
          color="primary"
          showFirstButton
          showLastButton
          sx={{ marginBottom: "32px" }}
        />
      </Box>
    </>
  );
}
