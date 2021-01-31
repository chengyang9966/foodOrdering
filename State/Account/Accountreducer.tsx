import { SumTotalAmount } from "../../types";

export default (state: any, action: any) => {
  console.log("🚀", state);
  switch (action.type) {
    case SumTotalAmount:
      return {
        ...state,
        Item: [...state.Item, action.payload],
      };

    default:
      return state;
  }
};
