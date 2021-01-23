import { createContext } from "react";

export interface ScrollViewContext {
  Restaurant: Array<any>;
  EachRestaurant: Array<any>;
}

const ScrollViewContext = createContext({} as ScrollViewContext);
export default ScrollViewContext;
