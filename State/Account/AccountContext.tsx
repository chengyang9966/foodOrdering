import React, { createContext } from "react";

export interface Account {
  Name: string;
  PhoneNo: string | number;
  Email: string;
  Address: {
    address1: string;
    address2: string;
    state: string;
    county: string;
    postcode: number;
    country: string;
  };
  Item: Array<any>;
  SumAmount: (props: any) => void;
}

const AccountContext = createContext({} as Account);

export default AccountContext;
