import { Grid } from '@mui/material';
import React, { FC } from 'react';
import { ProductCard } from './ProductCard';

import { IProduct } from '../../interfaces';

interface Props {
  products: IProduct[];
}

export const ProductList: FC<Props> = ({ products }) => {
  return (
    <Grid container>
      {products.map((product) => (
        <ProductCard product={product} key={product.slug} />
      ))}
    </Grid>
  );
};
