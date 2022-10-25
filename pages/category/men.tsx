import { Typography } from '@mui/material';
import React from 'react';
import { ShopLayout } from '../../components/layouts';
import { ProductList } from '../../components/products';
import { FullScreanLoading } from '../../components/ui';
import { useProducts } from '../../hooks';

function MenPage() {
  const { products, isLoading } = useProducts('products?gender=men');
  return (
    <ShopLayout
      title={'Teslo-Shop - Men category'}
      pageDescription={'Encuentra los mejores productos de Teslo aquí'}
    >
      <Typography variant="h1" component="h1">
        Hombres
      </Typography>
      <Typography variant="h2" component="h2" sx={{ mb: 1 }}>
        Productos para hombres
      </Typography>

      {isLoading ? <FullScreanLoading /> : <ProductList products={products} />}
    </ShopLayout>
  );
}

export default MenPage;
