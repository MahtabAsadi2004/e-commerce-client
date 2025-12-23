import React from "react";
import { Card, CardContent, CardActions, Box, Skeleton } from "@mui/material";

export default function ProductsLoading() {
  return (
    <Card
      sx={{
        width: "100%",
        height: "450px",
        overflow: "hidden",
      }}
    >
      {/* Image Skeleton */}
      <Box sx={{ height: "55%", width: "100%" }}>
        <Skeleton 
          variant="rectangular" 
          width="100%" 
          height="100%" 
          animation="wave"
        />
      </Box>

      <CardContent>
        {/* Category Skeleton */}
        <Skeleton 
          variant="text" 
          width="60%" 
          height={24} 
          sx={{ mb: 1 }}
          animation="wave"
        />
        
        {/* Title Skeleton */}
        <Skeleton 
          variant="text" 
          width="80%" 
          height={32} 
          sx={{ mb: 2 }}
          animation="wave"
        />
        
        {/* Description Skeleton */}
        <Skeleton 
          variant="text" 
          width="100%" 
          height={20} 
          sx={{ mb: 0.5 }}
          animation="wave"
        />
        <Skeleton 
          variant="text" 
          width="90%" 
          height={20} 
          sx={{ mb: 0.5 }}
          animation="wave"
        />
        <Skeleton 
          variant="text" 
          width="70%" 
          height={20} 
          sx={{ mb: 2 }}
          animation="wave"
        />
        
        {/* Price Skeleton */}
        <Skeleton 
          variant="text" 
          width="40%" 
          height={24} 
          animation="wave"
        />
      </CardContent>

      <CardActions>
        <Skeleton 
          variant="rectangular" 
          width={120} 
          height={36} 
          sx={{ borderRadius: "8px" }}
          animation="wave"
        />
      </CardActions>
    </Card>
  );
}