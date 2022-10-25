import React, { FC, useEffect, useReducer } from 'react';
import Cookies from 'js-cookie';
import { ICartProduct } from '../../interfaces';
import { CartContext, cartReducer } from './';

interface Props {
  children: React.ReactElement;
}

export interface cartState {
  cart: ICartProduct[];
  numberOfItems: number;
  subTotal: number;
  tax: number;
  total: number;
}

const CART_INITIAL_STATE: cartState = {
  cart: [],
  numberOfItems: 0,
  subTotal: 0,
  tax: 0,
  total: 0,
};

export const CartProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);

  useEffect(() => {
    try {
      const cookieProducts = (
        Cookies.get('cart') ? JSON.parse(Cookies.get('cart')!) : []
      ) as ICartProduct[];

      dispatch({
        type: '[Cart] LoadCart from cookies | storage',
        payload: cookieProducts,
      });
    } catch (error) {
      dispatch({
        type: '[Cart] LoadCart from cookies | storage',
        payload: [],
      });
    }
  }, []);

  useEffect(() => {
    Cookies.set('cart', JSON.stringify(state.cart));
  }, [state.cart]);

  useEffect(() => {
    const numberOfItems = state.cart.reduce(
      (prev, current) => prev + current.quantity,
      0
    );
    const subTotal = state.cart.reduce(
      (prev, current) => prev + current.price,
      0
    );
    const taxRate = Number(process.env.NEXT_PUBLIC_TAX_RATE || 0);

    const orderSummary = {
      numberOfItems,
      subTotal,
      tax: subTotal * taxRate,
      total: subTotal * (taxRate + 1),
    };

    dispatch({ type: '[Cart] Update order summary', payload: orderSummary });
  }, [state.cart]);

  const addCartProduct = (product: ICartProduct) => {
    const productInCart = state.cart.some((p) => p._id === product._id);

    if (!productInCart)
      return dispatch({
        type: '[Cart] Update products in cart',
        payload: [...state.cart, product],
      });

    const productInCartButDifferentSize = state.cart.some(
      (p) => p._id === product._id && p.size === product.size
    );

    if (!productInCartButDifferentSize)
      return dispatch({
        type: '[Cart] Update products in cart',
        payload: [...state.cart, product],
      });

    const updatedProducts = state.cart.map((p) => {
      if (p._id !== product._id) return p;
      if (p.size !== product._id) return p;

      p.quantity += product.quantity;

      return p;
    });

    return dispatch({
      type: '[Cart] Update products in cart',
      payload: updatedProducts,
    });
  };

  const updateCartQuantity = (product: ICartProduct) => {
    dispatch({ type: '[Cart] Change cart quantity', payload: product });
  };

  const removeProductInCart = (product: ICartProduct) => {
    dispatch({ type: '[Cart] Remove product in cart', payload: product });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        addCartProduct,
        updateCartQuantity,
        removeProductInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
