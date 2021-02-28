import { createContext } from "react";

export interface ScrollViewContext {
  Restaurant: Array<any>;
  EachRestaurant: Array<any>;
  CheckOut: Array<any>;
}

const ScrollViewContext = createContext({} as ScrollViewContext);
export default ScrollViewContext;
