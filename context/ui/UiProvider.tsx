import React, { FC, useReducer } from 'react';
import { UiContext, uiReducer } from './';

interface Props {
  children: React.ReactElement;
}

export interface UiState {
  isSideMenuOpen: boolean;
}

const UI_INITIAL_STATE: UiState = {
  isSideMenuOpen: false,
};

export const UiProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const toggleSideMenu = () => {
    dispatch({ type: '[Ui] - ToggleMenu' });
  };

  return (
    <UiContext.Provider
      value={{
        ...state,
        //METHODS
        toggleSideMenu,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};
