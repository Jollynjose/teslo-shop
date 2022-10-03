import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  Box,
  Typography,
} from '@mui/material';
import NextLink from 'next/link';
import React, { FC, useMemo, useState } from 'react';
import { IProduct } from '../../interfaces';

interface Props {
  product: IProduct;
}

export const ProductCard: FC<Props> = ({ product }) => {
  const [isMovered, setIsMovered] = useState(false);

  const productImage = useMemo(() => {
    return isMovered
      ? `products/${product.images[1]}`
      : `products/${product.images[0]}`;
  }, [isMovered, product.images]);

  return (
    <Grid
      item
      xs={6}
      sm={4}
      onMouseEnter={() => setIsMovered(true)}
      onMouseLeave={() => setIsMovered(false)}
    >
      <Card>
        <NextLink href="product/slug" passHref>
          <CardActionArea>
            <CardMedia
              component="img"
              image={productImage}
              alt={product.title}
              className="fadeIn"
            ></CardMedia>
          </CardActionArea>
        </NextLink>
      </Card>
      <Box sx={{ mt: 1 }} className="fadeIn">
        <Typography fontWeight={700}>{product.title}</Typography>
        <Typography fontWeight={500}>{`$${product.price}`}</Typography>
      </Box>
    </Grid>
  );
};
