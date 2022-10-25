import { createContext } from 'react';

export interface ContextProps {
  isSideMenuOpen: boolean;
  toggleSideMenu: () => void;
}

export const UiContext = createContext({} as ContextProps);
