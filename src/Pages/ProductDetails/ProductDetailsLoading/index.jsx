import { Box, Container, Skeleton, Stack } from '@mui/material'
import React from 'react'

export default function ProductDetailsLoading() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
        <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
          <Box sx={{ width: { xs: "100%", md: "50%" } }}>
            <Skeleton variant="rectangular" height={400} sx={{ borderRadius: 2 }} />
          </Box>
          <Box sx={{ width: { xs: "100%", md: "50%" } }}>
            <Skeleton variant="text" height={40} width="30%" sx={{ mb: 2 }} />
            <Skeleton variant="text" height={60} sx={{ mb: 3 }} />
            <Skeleton variant="text" height={100} sx={{ mb: 2 }} />
            <Skeleton variant="text" height={50} width="40%" />
          </Box>
        </Stack>
      </Container>
  )
}
