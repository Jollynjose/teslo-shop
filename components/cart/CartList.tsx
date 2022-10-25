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
import React, { FC, useContext } from 'react';
import NextLink from 'next/link';
import { ItemCounter } from '../ui';
import { CartContext } from '../../context/cart/cartContext';
import { ICartProduct } from '../../interfaces';

interface Props {
  editable?: boolean;
}
export const CartList: FC<Props> = ({ editable }) => {
  const { cart, updateCartQuantity, removeProductInCart } =
    useContext(CartContext);

  const onNewCartQuantityValue = (
    product: ICartProduct,
    newQuantityValue: number
  ) => {
    product.quantity = newQuantityValue;

    updateCartQuantity(product);
  };
  return (
    <>
      {cart.map((product) => (
        <Grid
          container
          spacing={2}
          sx={{ mb: 1 }}
          key={product.slug + product.size}
        >
          <Grid item xs={3}>
            <NextLink href={`/product/${product.slug}`} passHref>
              <Link>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={`/products/${product.image}`}
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
                <ItemCounter
                  currentValue={product.quantity}
                  updatedQuantity={(value) =>
                    onNewCartQuantityValue(product, value)
                  }
                  maxValue={10}
                />
              ) : (
                <Typography variant="h5">
                  {product.quantity} producto{product.quantity > 1 ? 's' : ''}
                </Typography>
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
              <Button
                variant="text"
                color="secondary"
                onClick={() => removeProductInCart(product)}
              >
                Remover
              </Button>
            )}
          </Grid>
        </Grid>
      ))}
    </>
  );
};
