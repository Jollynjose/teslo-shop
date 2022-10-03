import { Box, Button } from '@mui/material';
import React, { FC } from 'react';
import { IValidSizes } from '../../interfaces';

interface Props {
  selectedSize?: IValidSizes;
  sizes: IValidSizes[];
}

export const SizeSelector: FC<Props> = ({ selectedSize, sizes }) => {
  return (
    <Box>
      {sizes.map((size) => (
        <Button
          key={size}
          size="small"
          color={size === selectedSize ? 'primary' : 'info'}
        >
          {size}
        </Button>
      ))}
    </Box>
  );
};
