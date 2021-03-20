import React, { useReducer } from "react";
import {
  SumTotalAmount,
  SelectCheckOut,
  ADDREWARDS,
  ADDBANK,
  EDITBANK,
  EDITREWARDS,
  EDITCONTACT,
  SELECTCLUT,
  PAYMENTSTATUS,
} from "../../types";
import AccountReducer from "./Accountreducer";
import AccountContext, { Account } from "./AccountContext";

const AccountState = (props: any) => {
  const initialState = {
    Item: [] as any,
    PastOrder: [],
    PaymentStatus: "",
    SelectedCheckOut: "",
    SelectCutleries: true,
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
    Payment: {
      BankDetails: [
        { BankName: "CIMB", BankNumber: "2121", Primary: true, Id: "10000001" },
        {
          BankName: "MAYBANK",
          BankNumber: "7231323",
          Primary: false,
          Id: "10000002",
        },
      ],
      Rewards: [
        {
          RewardName: "BonusLink",
          RewardNumber: "64321232",
          Primary: true,
          Id: "20000001",
        },
        {
          RewardName: "BonusLink2",
          RewardNumber: "321232",
          Primary: false,
          Id: "20000002",
        },
      ],
    },
  };

  const [state, dispatch] = useReducer(AccountReducer, initialState);

  const SumAmount = (props: any) => {
    dispatch({
      type: SumTotalAmount,
      payload: props,
    });
  };
  const SelectCheckOutMethod = (props: any) => {
    dispatch({
      type: SelectCheckOut,
      payload: props,
    });
  };
  const AddBank = (props: any) => {
    dispatch({
      type: ADDBANK,
      payload: props,
    });
  };
  const EditBank = (props: any) => {
    dispatch({
      type: EDITBANK,
      payload: props,
    });
  };
  const SelectClut = () => {
    dispatch({
      type: SELECTCLUT,
    });
  };
  const AddReward = (props: any) => {
    dispatch({
      type: ADDREWARDS,
      payload: props,
    });
  };
  const EditReward = (props: any) => {
    dispatch({
      type: EDITREWARDS,
      payload: props,
    });
  };
  const EditContact = (props: any) => {
    dispatch({
      type: EDITCONTACT,
      payload: props,
    });
  };
  const SetPaymentStatus = (props: any) => {
    dispatch({
      type: PAYMENTSTATUS,
      payload: props,
    });
  };
  return (
    <AccountContext.Provider
      value={{
        Name: state.Name,
        PastOrder: state.PastOrder,
        PaymentStatus: state.PaymentStatus,
        PhoneNo: state.PhoneNo,
        Address: state.Address,
        Email: state.Email,
        Item: state.Item,
        SelectedCheckOut: state.SelectedCheckOut,
        SelectCutleries: state.SelectCutleries,
        PaymentDetails: state.Payment,
        SumAmount,
        SelectCheckOutMethod,
        AddBank,
        EditBank,
        AddReward,
        EditReward,
        EditContact,
        SelectClut,
        SetPaymentStatus,
      }}
    >
      {props.children}
    </AccountContext.Provider>
  );
};

export default AccountState;
