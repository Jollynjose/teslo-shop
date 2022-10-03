import { Grid, Typography, Chip, Link } from '@mui/material';
import NextLink from 'next/link';
import { DataGrid } from '@mui/x-data-grid';
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid/models';
import React from 'react';
import { ShopLayout } from '../../components/layouts';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'fullname', headerName: 'Nombre completo', width: 300 },
  {
    field: 'paid',
    headerName: 'Pagada',
    width: 200,
    description: 'Muestra información si está pagada la orden o no',
    renderCell: (params: GridRenderCellParams) => {
      return params.row.paid ? (
        <Chip color="success" label="Pagada" variant="outlined" />
      ) : (
        <Chip color="error" label="Pagada" variant="outlined" />
      );
    },
  },
  {
    field: 'orden',
    headerName: 'Ver orden',
    width: 200,
    description: 'Muestra información si está pagada la orden o no',
    sortable: false,
    renderCell: (params: GridRenderCellParams) => {
      return (
        <NextLink href={`/orders/${params.row.id}`} passHref>
          <Link underline="always">Ver orden</Link>
        </NextLink>
      );
    },
  },
];

const rows = [
  { id: 1, fullname: 'Jollyn Saint Hilaire', paid: true },
  { id: 2, fullname: 'Jose Saint Hilaire', paid: false },
];

const HistoryPage = () => {
  return (
    <ShopLayout
      title="Historial de de ordenes"
      pageDescription="Historial de ordenes del cliente"
    >
      <Typography variant="h1" component="h1">
        Historial de ordenes
      </Typography>

      <Grid container>
        <Grid item xs={12} sx={{ height: 650, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
          />
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default HistoryPage;
