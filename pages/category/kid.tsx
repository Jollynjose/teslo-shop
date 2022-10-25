import { Typography } from '@mui/material';
import React from 'react';
import { ShopLayout } from '../../components/layouts';
import { ProductList } from '../../components/products';
import { FullScreanLoading } from '../../components/ui';
import { useProducts } from '../../hooks';

function KidPage() {
  const { products, isLoading } = useProducts('products?gender=kid');
  return (
    <ShopLayout
      title={'Teslo-Shop - Kid Category'}
      pageDescription={'Encuentra los mejores productos de Teslo aquí'}
    >
      <Typography variant="h1" component="h1">
        Niños
      </Typography>
      <Typography variant="h2" component="h2" sx={{ mb: 1 }}>
        Productos para niños
      </Typography>

      {isLoading ? <FullScreanLoading /> : <ProductList products={products} />}
    </ShopLayout>
  );
}

export default KidPage;
