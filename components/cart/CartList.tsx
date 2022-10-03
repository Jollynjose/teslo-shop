import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Link,
  Typography,
} from '@mui/material';
import React, { FC } from 'react';
import { initialData } from '../../database/products';
import NextLink from 'next/link';
import { ItemCounter } from '../ui';

interface Props {
  editable?: boolean;
}

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

export const CartList: FC<Props> = ({ editable }) => {
  return (
    <>
      {productsInCart.map((product) => (
        <Grid container spacing={2} sx={{ mb: 1 }} key={product.slug}>
          <Grid item xs={3}>
            <NextLink href="/product/slug" passHref>
              <Link>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={`/products/${product.images[0]}`}
                      sx={{ borderRadius: '5px' }}
                    ></CardMedia>
                  </CardActionArea>
                </Card>
              </Link>
            </NextLink>
          </Grid>
          <Grid item xs={7}>
            <Box display="flex" flexDirection="column">
              <Typography variant="body1">{product.title}</Typography>
              <Typography variant="body1">
                Talla: <strong>M</strong>
              </Typography>

              {editable ? (
                <ItemCounter />
              ) : (
                <Typography variant="h5">3 Items</Typography>
              )}
            </Box>
          </Grid>
          <Grid
            item
            xs={2}
            display="flex"
            alignItems="center"
            flexDirection="column"
          >
            <Typography variant="subtitle1">{`$${product.price}`}</Typography>
            {editable && (
              <Button variant="text" color="secondary">
                Remover
              </Button>
            )}
          </Grid>
        </Grid>
      ))}
    </>
  );
};
