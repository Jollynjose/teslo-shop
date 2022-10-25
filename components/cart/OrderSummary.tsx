import { Grid, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { CartContext } from '../../context/cart/cartContext';
import { currency } from '../../utils';

export const OrderSummary = () => {
  const { total, subTotal, tax, numberOfItems } = useContext(CartContext);
  return (
    <Grid container>
      <Grid item xs={6}>
        <Typography>No. Productos</Typography>
      </Grid>
      <Grid item xs={6} display="flex" justifyContent="end">
        <Typography>{`${numberOfItems} ${
          numberOfItems > 1 ? 'productos' : 'producto'
        }`}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography>Subtotal</Typography>
      </Grid>
      <Grid item xs={6} display="flex" justifyContent="end">
        <Typography>{`${currency.format(subTotal)}`}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography>
          Impuestos ({`${process.env.NEXT_PUBLIC_TAX_RATE || 0}`})
        </Typography>
      </Grid>
      <Grid item xs={6} display="flex" justifyContent="end">
        <Typography>{`${currency.format(tax)}`}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="subtitle1">Total</Typography>
      </Grid>
      <Grid item xs={6} display="flex" justifyContent="end">
        <Typography variant="subtitle1">{`${currency.format(
          total
        )}`}</Typography>
      </Grid>
    </Grid>
  );
};
