import { Box, Grid, TextField, Typography, Button, Link } from '@mui/material';
import NextLink from 'next/link';
import { AuthLayout } from '../../components/layouts';

function RegisterPage() {
  return (
    <AuthLayout title="Registrar">
      <Box sx={{ width: 350, padding: '10px 20px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h1" component="h1">
              Crear Cuenta
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Nombre" variant="filled" fullWidth></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Correo" variant="filled" fullWidth></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Contraseñá"
              type="password"
              variant="filled"
              fullWidth
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <Button
              color="secondary"
              className="circular-btn"
              size="large"
              fullWidth
            >
              Registrar
            </Button>
          </Grid>
          <Grid item xs={12} display="flex" justifyContent="end">
            <NextLink href="/auth/login" passHref>
              <Link underline="always">Ya tienes cuenta?</Link>
            </NextLink>
          </Grid>
        </Grid>
      </Box>
    </AuthLayout>
  );
}

export default RegisterPage;
