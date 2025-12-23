import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import fetchData from "../../Utils/fetchData";
import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import ProductDetailsLoading from "./ProductDetailsLoading";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../Store/Slice/CartSlice";
import { Add, AddShoppingCart, Remove } from "@mui/icons-material";
import gsap from "gsap";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const cartQuantity =
    useSelector((state) => state.cart.items).find(
      (item) => item?.id == product?.id
    )?.cartQuantity || 0;

  const { items } = useSelector((state) => state.cart);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const response = await fetchData(`products/${id}?populate=*`);
      setProduct(response.data);
      setLoading(false);
      console.log(response.data);
    })();
  }, [id]);

  const addToCartBtn = useRef(null);

  // const handleAddToCartClick = () => {
  //   const button = addToCartBtn.current;
  //   if (!button) return;

  //   const tl = gsap.timeline();

  //   tl.to(button, {
  //     scale: 1,
  //     duration: 0.5,
  //     ease: "power3.out",
  //   })
  //     .to(button, {
  //       scale: 0.5,
  //       duration: 0.3,
  //       ease: "elastic.out(1, 0.6)",
  //     })
  //     .to(
  //       button,
  //       {
  //         scale: 1,
  //         backgroundColor: "#0c53a4ff",
  //         duration: 0.1,
  //       },
  //       "-=0.2"
  //     )
  //     .to(button, {
  //       backgroundColor: "#105aa4ff",
  //       duration: 0.2,
  //     });

  //   dispatch(addItem(product));
  //   console.log(items);
  // };

  const handleButtonHover = () => {
    const button = addToCartBtn.current;
    if (!button) return;

    gsap
      .to(button, {
        scale: 1.1,
        duration: 0.7,
        backgroundColor: "#0c53a4ff",
        ease: "power1.out",
      })
      .to(button, {
        scale: 0.2,
        duration: 0.3,
        ease: "elastic.out(1, 0.6)",
      });
  };

  const handleButtonHoverEnd = () => {
    const button = addToCartBtn.current;
    if (!button) return;

    gsap.to(button, {
      scale: 1,
      duration: 0.2,
      ease: "power2.out",
    });
  };

  if (loading) return <ProductDetailsLoading />;

  if (!product)
    return (
      <Container
        maxWidth="sm"
        sx={{ py: 8, textAlign: "center", height: "70vh" }}
      >
        <Typography variant="h5" color="text.secondary">
          Product Not Found
        </Typography>
      </Container>
    );

  return (
    <Container
      maxWidth="lg"
      sx={{
        py: 4,
        minHeight: "80vh",
        margin: "48px auto",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
        borderRadius: "10px",
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={4}
        alignItems="center"
      >
        <Box
          sx={{
            width: { xs: "100%", md: "55%" },
            maxWidth: 500,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src={import.meta.env.VITE_FILE_URL + product.image.url}
            alt={product.title}
            sx={{
              width: "100%",
              maxWidth: 400,
              height: "auto",
              borderRadius: 2,
              objectFit: "contain",
            }}
          />
        </Box>

        <Box sx={{ width: { xs: "100%", md: "45%" }, maxWidth: 500 }}>
          <Typography
            variant="overline"
            color="text.secondary"
            sx={{ display: "block", mb: 1 }}
          >
            {product.category}
          </Typography>
          <Typography
            variant="h4"
            component="h1"
            sx={{ mb: 2, fontWeight: 600 }}
          >
            {product.title}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 3, lineHeight: 1.6 }}
          >
            {product.description}
          </Typography>
          <Typography
            variant="h5"
            sx={{ fontWeight: 700, color: "primary.main" }}
          >
            ${product.price}
          </Typography>

          <Box>
            <Typography variant="h6" sx={{ mt: 4, mb: 1, fontWeight: 600 }}>
              Quantity
            </Typography>

            {cartQuantity > 0 ? (
              <Stack direction="row" alignItems="center" spacing={2}>
                <IconButton
                  onClick={() => dispatch(removeItem(product.id))}
                  sx={{
                    bgcolor: "primary.main",
                    color: "white",
                    "&:hover": {
                      bgcolor: "primary.dark",
                    },
                  }}
                >
                  <Remove />
                </IconButton>

                <Typography
                  variant="h6"
                  sx={{
                    minWidth: 40,
                    textAlign: "center",
                    fontWeight: 600,
                  }}
                >
                  {cartQuantity}
                </Typography>

                <IconButton
                  disabled={cartQuantity >= product?.quantity}
                  onClick={() => dispatch(addItem(product))}
                  sx={{
                    bgcolor: "primary.main",
                    color: "white",
                    "&:hover": {
                      bgcolor: "primary.dark",
                    },
                    "&.Mui-disabled": {
                      bgcolor: "grey.300",
                    },
                  }}
                >
                  <Add />
                </IconButton>
              </Stack>
            ) : (
              <Button
                ref={addToCartBtn}
                onClick={() => {
                  console.log(product);
                  dispatch(addItem(product));
                  console.log(items);
                }}
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleButtonHoverEnd}
                variant="contained"
                size="large"
                startIcon={<AddShoppingCart />}
                sx={{
                  py: 1.5,
                  px: 3,
                  borderRadius: 2,
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  textTransform: "none",
                  boxShadow: "0 4px 14px rgba(0,0,0,0.2)",
                  "&:hover": {
                    boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.5s ease",
                }}
              >
                Add to Cart
              </Button>
            )}
          </Box>
        </Box>
      </Stack>
    </Container>
  );
}
