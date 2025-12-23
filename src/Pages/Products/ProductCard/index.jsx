import { motion } from "framer-motion";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      style={{ width: "100%", height: "450px" }}
    >
      <Card
        component={motion.div}
        variants={{
          initial: { scale: 1, y: 0 },
          hover: { scale: 1.02, y: -4 },
        }}
        sx={{
          width: "100%",
          height: "100%",
          cursor: "pointer",
        }}
      >
        <CardMedia
          component={motion.div}
          variants={{
            initial: { scale: 1 },
            hover: { scale: 0.95 },
          }}
          sx={{ height: "55%", width: "100%" }}
          image={import.meta.env.VITE_FILE_URL + product.image.url}
          title={product.title}
        />

        <CardContent>
          <Typography
            gutterBottom
            variant="h4"
            fontSize={".8rem"}
            component="div"
          >
            Category : {product.category}
          </Typography>
          <Typography
            gutterBottom
            variant="h2"
            fontSize={"1.4rem"}
            component="div"
          >
            {product.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {product.description.split(" ").slice(0, 9).join(" ")}...
          </Typography>
          <Typography
            variant="h4"
            fontSize={"1rem"}
            sx={{ color: "text.secondary" }}
          >
            Price : ${product.price}
          </Typography>
        </CardContent>

        <CardActions>
          <Button
            size="small"
            variant="outlined"
            component={motion.button}
            variants={{
              initial: { opacity: 0.9 },
              hover: { opacity: 1, scale: 1.05 },
            }}
            sx={{
              borderRadius: "8px",
              textTransform: "none",
              padding: "6px 16px",
              fontSize: "14px",
            }}
            onClick={() => {
              navigate(
                `/product-details/${product.documentId}/${product.title
                  .replaceAll(" ", "-")
                  .toLowerCase()}`
              );
            }}
          >
            More Details
          </Button>
        </CardActions>
      </Card>
    </motion.div>
  );
}
