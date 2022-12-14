import { Box, Typography } from '@mui/material';
import React from 'react';
import { ShopLayout } from '../components/layouts';

function Custom404() {
  return (
    <ShopLayout
      title="Page not Found"
      pageDescription="No hay nada que mostrar"
    >
      <Box
        display="flex"
        sx={{ flexDirection: { sm: 'row', xs: 'column' } }}
        justifyContent="center"
        alignItems="center"
        height="calc(100vh - 200px)"
      >
        <Typography variant="h1" component="h1" fontSize={80} fontWeight={200}>
          404 |
        </Typography>
        <Typography marginLeft={2}>
          No encontramos ninguna página aquí
        </Typography>
      </Box>
    </ShopLayout>
  );
}

export default Custom404;
