import { Grid, Typography } from '@mui/material';
import React from 'react';

export const OrderSummary = () => {
  return (
    <Grid container>
      <Grid item xs={6}>
        <Typography>No. Productos</Typography>
      </Grid>
      <Grid item xs={6} display="flex" justifyContent="end">
        <Typography>3 items</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography>Subtotal</Typography>
      </Grid>
      <Grid item xs={6} display="flex" justifyContent="end">
        <Typography>{`$150.50`}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography>Impuestos</Typography>
      </Grid>
      <Grid item xs={6} display="flex" justifyContent="end">
        <Typography>{`15%`}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="subtitle1">Total</Typography>
      </Grid>
      <Grid item xs={6} display="flex" justifyContent="end">
        <Typography variant="subtitle1">{`$750.50`}</Typography>
      </Grid>
    </Grid>
  );
};
