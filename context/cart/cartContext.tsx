import { createContext } from 'react';
import { ICartProduct } from '../../interfaces';

export interface ContextProps {
  cart: ICartProduct[];
  numberOfItems: number;
  subTotal: number;
  tax: number;
  total: number;

  //methods
  addCartProduct: (cartProduct: ICartProduct) => void;
  removeProductInCart: (product: ICartProduct) => void;
  updateCartQuantity: (product: ICartProduct) => void;
}

export const CartContext = createContext({} as ContextProps);
