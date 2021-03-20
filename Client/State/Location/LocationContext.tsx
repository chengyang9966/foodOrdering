import { createContext } from "react";

export interface LocationContext {
  SelectedLocation: string;
  loading: boolean;
  list: Array<any>;
  Tab: string;
  SearchLocation: (props: string) => void;
  SelectItem: (props: string) => void;
  Reset: () => void;
  Ready: () => void;
}

const LocationContext = createContext({} as LocationContext);

export default LocationContext;
