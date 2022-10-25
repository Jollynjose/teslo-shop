import { Typography } from '@mui/material';
import React from 'react';
import { ShopLayout } from '../../components/layouts';
import { ProductList } from '../../components/products';
import { FullScreanLoading } from '../../components/ui';
import { useProducts } from '../../hooks';

function Womenpage() {
  const { products, isLoading } = useProducts('products?gender=women');
  return (
    <ShopLayout
      title={'Teslo-Shop - Home'}
      pageDescription={'Encuentra los mejores productos de Teslo aquí'}
    >
      <Typography variant="h1" component="h1">
        Mujeres
      </Typography>
      <Typography variant="h2" component="h2" sx={{ mb: 1 }}>
        Productos para mujeres
      </Typography>

      {isLoading ? <FullScreanLoading /> : <ProductList products={products} />}
    </ShopLayout>
  );
}

export default Womenpage;
