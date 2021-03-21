export type RootStackParamList = {
  NotFound: undefined;
  HomePage: undefined;
  Test: undefined;
  Item: undefined;
};

export type DrawerList = {
  Home: undefined;
  Orders: undefined;
  Account: undefined;
  Wallet: undefined;
  Vouchers: undefined;
  Help: undefined;
  About: undefined;
  Logout: undefined;
};

export const SEARCH_LOCATION = "SEARCH_LOCATION";
export const SELECT_TAB = "SELECT_TAB";
export const RESET = "RESET";
export const READY = "READY";
export const SELECETED_ITEM = "SELECETED_ITEM";
export const SumTotalAmount = "SumTotalAmount";
export const SelectCheckOut = "SelectCheckOut";
export const ADDBANK = "ADDBANK";
export const EDITBANK = "EDITBANK";
export const ADDREWARDS = "ADDREWARDS";
export const EDITREWARDS = "EDITREWARDS";
export const EDITCONTACT = "EDITCONTACT";
export const SELECTCLUT = "SELECTCLUT";
export const PAYMENTSTATUS = "PAYMENTSTATUS";
export const INCREASENUMBER = "INCREASENUMBER";

export enum PaymentStatus {
  Pending = "Pending",
  Success = "Success",
  Fail = "Fail",
  FirstPay = "FirstPay",
}
