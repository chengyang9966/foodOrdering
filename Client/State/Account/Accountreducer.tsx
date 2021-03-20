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

export default (state: any, action: any) => {
  switch (action.type) {
    case SumTotalAmount:
      const ItemExists = state.Item.find(
        (e: any) => e.id === action.payload.id
      );
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
    case SELECTCLUT:
      return {
        ...state,
        SelectCutleries: !state?.SelectCutleries,
      };
    case PAYMENTSTATUS:
      return {
        ...state,
        PaymentStatus: action.payload,
      };
    case ADDBANK:
      let temp: any[] = state.Payment.BankDetails;
      let length = temp?.length;
      let LatestID = temp.slice(-1).pop();

      if (action.payload.Primary === true) {
        let x: any[] = [];
        temp.map((w) => {
          x.push({
            ...w,
            Primary: false,
          });
        });
        temp = x;
      }
      return {
        ...state,
        Payment: {
          ...state.Payment,
          BankDetails: [
            ...temp,
            { ...action.payload, Id: (Number(LatestID.Id) + 1).toString() },
          ],
        },
      };
    case EDITCONTACT:
      const { Name, Value } = action.payload;
      return {
        ...state,
        [Name]: Value,
      };

    case EDITBANK:
      let temp3: any[] = state.Payment.BankDetails;
      let EditBank = state.Payment.BankDetails.find(
        (w: any) => w.Id === action.payload.Id
      );
      if (action.payload.Primary === true) {
        let x: any[] = [];
        temp3.map((w) => {
          w.Id !== EditBank.Id
            ? x.push({
                ...w,
                Primary: false,
              })
            : x.push(action.payload);
        });
        temp3 = x;
      } else {
        let k: any[] = [];
        temp3.map((w) => {
          w.Id !== EditBank.Id
            ? k.push({
                ...w,
                Primary: false,
              })
            : k.push(action.payload);
        });
        temp3 = k;
      }
      return {
        ...state,
        Payment: {
          ...state.Payment,
          BankDetails: [...temp3],
        },
      };
    case ADDREWARDS:
      let temp2: any[] = state.Payment.Rewards;
      let LatestID1 = temp2.slice(-1).pop();
      if (action.payload.Primary === true) {
        let x: any[] = [];
        temp2.map((w) => {
          x.push({
            ...w,
            Primary: false,
          });
        });
        temp2 = x;
      }

      return {
        ...state,
        Payment: {
          ...state.Payment,
          Rewards: [
            ...temp2,
            { ...action.payload, Id: Number(LatestID1 + 1).toString() },
          ],
        },
      };
    case EDITREWARDS:
      let temp4: any[] = state.Payment.Rewards;
      let EditReward = state.Payment.Rewards.find(
        (w: any) => w.Id === action.payload.Id
      );
      if (action.payload.Primary === true) {
        let x: any[] = [];
        temp4.map((w) => {
          w.Id !== EditReward.Id
            ? x.push({
                ...w,
                Primary: false,
              })
            : x.push(action.payload);
        });
        temp4 = x;
      } else {
        let k: any[] = [];
        temp4.map((w) => {
          w.Id !== EditReward.Id
            ? k.push({
                ...w,
                Primary: false,
              })
            : k.push(action.payload);
        });
        temp4 = k;
      }
      return {
        ...state,
        Payment: {
          ...state.Payment,
          Rewards: [...temp4],
        },
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
