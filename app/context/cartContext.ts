import { createContext } from "react";
import { ISavadchaProduct } from "../lib/types";

interface ICartContextState {
  cart: ISavadchaProduct[];
  setCart: (cart: ISavadchaProduct[] | ((prev: ISavadchaProduct[])=> ISavadchaProduct[])) => void;
}

type cartContextType = ICartContextState | null;

export const cartContext = createContext<cartContextType>(null);
