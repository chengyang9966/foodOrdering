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
    BankDetails: {
      BankName: string;
      BankNumber: string;
      Primary: boolean;
      Id: string;
    }[];
    Rewards: {
      RewardName: string;
      RewardNumber: string;
      Primary: boolean;
      Id: string;
    }[];
  };
  Item: Array<any>;
  PastOrder: Array<any>;
  PaymentStatus: string;
  SelectCutleries: Boolean;
  SelectedCheckOut: string;
  SumAmount: (props: any) => void;
  SelectCheckOutMethod: (props: any) => void;
  AddBank: (props: any) => void;
  EditBank: (props: any) => void;
  AddReward: (props: any) => void;
  EditReward: (props: any) => void;
  EditContact: (props: any) => void;
  SetPaymentStatus: (props: any) => void;
  SelectClut: () => void;
}

const AccountContext = createContext({} as Account);

export default AccountContext;
