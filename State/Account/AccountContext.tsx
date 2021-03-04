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
  PaymentDetails: {
    BankDetails: [{ BankName: string; BankNumber: string; Primary: boolean }];
    Rewards: {
      RewardName: string;
      RewardNumber: string;
    };
  };
  Item: Array<any>;
  SelectedCheckOut: string;
  SumAmount: (props: any) => void;
  SelectCheckOutMethod: (props: any) => void;
}

const AccountContext = createContext({} as Account);

export default AccountContext;
