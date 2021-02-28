import { SumTotalAmount, SelectCheckOut } from "../../types";

export default (state: any, action: any) => {
  const ItemExists = state.Item.find((e: any) => e.id === action.payload.id);
  switch (action.type) {
    case SumTotalAmount:
      return {
        ...state,
        Item: ItemExists
          ? state.Item.map((w: any) => {
              if (w.id === action.payload.id) {
                return {
                  ...w,
                  TotalAmount: action.payload.TotalAmount,
                  Quantity: action.payload.Quantity,
                  Notes: action.payload.Notes || "",
                };
                // w.TotalAmount += action.payload.TotalAmount;
                // w.Quantity += action.payload.Quantity;
              } else {
                return w;
              }
            })
          : [...state.Item, action.payload],
      };

    case SelectCheckOut:
      return {
        ...state,
        SelectedCheckOut: action.payload,
      };

    default:
      return state;
  }
};
