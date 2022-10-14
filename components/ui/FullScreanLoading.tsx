import { Box, CircularProgress, Typography } from '@mui/material';
import React from 'react';

export const FullScreanLoading = () => {
  return (
    <Box
      display="flex"
      sx={{ flexDirection: { sm: 'row', xs: 'column' } }}
      justifyContent="center"
      alignItems="center"
      height="calc(100vh - 200px)"
      flexDirection="column"
    >
      <Typography sx={{ mb: 3 }} variant="h2" fontWeight={200} fontSize={20}>
        Cargando...
      </Typography>
      <CircularProgress thickness={2} />
    </Box>
  );
};
