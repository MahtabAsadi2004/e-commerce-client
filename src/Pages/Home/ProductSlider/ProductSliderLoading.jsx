import React from 'react';
import { Box, Skeleton, Button, Typography, Card, CardMedia, CardContent } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Skeleton version of the ProductSlider
export const ProductSliderLoading = () => {
  return (
    <Box sx={{ margin: '48px 0', px: 3 }}>
      {/* Header skeleton */}
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          mb: 4,
          px: 2
        }}
      >
        <Skeleton 
          variant="text" 
          width={120} 
          height={40} 
          sx={{ bgcolor: 'grey.300' }}
        />
        <Skeleton 
          variant="rounded" 
          width={140} 
          height={36} 
          sx={{ bgcolor: 'grey.300' }}
        />
      </Box>

      {/* Slider skeleton */}
      <Box sx={{ px: 2 }}>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          style={{ paddingBottom: '40px' }}
        >
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <SwiperSlide key={item}>
              <Card sx={{ border: 'none', boxShadow: 'none' }}>
                {/* Image skeleton */}
                <Skeleton 
                  variant="rectangular" 
                  height={200} 
                  sx={{ 
                    bgcolor: 'grey.300',
                    borderRadius: '8px 8px 0 0'
                  }} 
                />
                
                {/* Content skeleton */}
                <CardContent sx={{ p: 2 }}>
                  <Skeleton 
                    variant="text" 
                    height={28} 
                    width="80%" 
                    sx={{ bgcolor: 'grey.300', mb: 1 }} 
                  />
                  <Skeleton 
                    variant="text" 
                    height={20} 
                    width="60%" 
                    sx={{ bgcolor: 'grey.300', mb: 2 }} 
                  />
                  <Skeleton 
                    variant="text" 
                    height={24} 
                    width="40%" 
                    sx={{ bgcolor: 'grey.300' }} 
                  />
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};