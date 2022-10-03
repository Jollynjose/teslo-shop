import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Link,
  Typography,
} from '@mui/material';
import NextLink from 'next/link';
import React from 'react';
import { CartList, OrderSummary } from '../../components/cart';
import { ShopLayout } from '../../components/layouts';

const SummaryPage = () => {
  return (
    <ShopLayout title="Resumen de Compra" pageDescription="Resumen de la orden">
      <Typography variant="h1" component="h1">
        Resumen de la orden
      </Typography>

      <Grid container>
        <Grid item xs={12} sm={7}>
          <CartList />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card>
            <CardContent>
              <Typography variant="h2">Resumen</Typography>
              <Divider sx={{ my: 1 }} />
              <Box display="flex" justifyContent="end">
                <NextLink href={'/checkout/address'} passHref>
                  <Link underline="always">Editar</Link>
                </NextLink>
              </Box>

              <Typography variant="subtitle1">Dirección de entrega</Typography>
              <Typography>Jollyn</Typography>
              <Typography>RD</Typography>
              <Typography>Santiago</Typography>
              <Typography>8094890267</Typography>
              <Typography>51000</Typography>

              <Divider sx={{ my: 1 }} />
              <Box display="flex" justifyContent="end">
                <NextLink href={'/cart'} passHref>
                  <Link underline="always">Editar</Link>
                </NextLink>
              </Box>
              <OrderSummary />
              <Box sx={{ mt: 3 }}>
                <Button color="secondary" className="circular-btn" fullWidth>
                  Checkout
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default SummaryPage;
