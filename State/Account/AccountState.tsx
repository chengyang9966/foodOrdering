import React, { useReducer } from "react";
import { SumTotalAmount } from "../../types";
import AccountReducer from "./Accountreducer";
import AccountContext, { Account } from "./AccountContext";

const AccountState = (props: any) => {
  const initialState = {
    Item: [] as any,
    Name: "Cheng Yang",
    PhoneNo: "0108930879",
    Email: "chengyang9966@gmail.com",
    Address: {
      address1: "27,Jalan Jernai 9",
      address2: "Medan Idaman",
      state: "Willayah Persekutuan",
      county: "Kuala Lumpur",
      postcode: 531000,
      country: "Malaysia",
    },
  };

  const [state, dispatch] = useReducer(AccountReducer, initialState);

  const SumAmount = (props: any) => {
    dispatch({
      type: SumTotalAmount,
      payload: props,
    });
  };

  return (
    <AccountContext.Provider
      value={{
        Name: state.Name,
        PhoneNo: state.PhoneNo,
        Address: state.Address,
        Email: state.Email,
        Item: state.Item,
        SumAmount,
      }}
    >
      {props.children}
    </AccountContext.Provider>
  );
};

export default AccountState;
