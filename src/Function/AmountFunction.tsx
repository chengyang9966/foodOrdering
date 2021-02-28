const AmtStr = (amount: string | number) => {
  if (!amount && amount !== 0) return "";
  const sign =
    Math.abs(typeof amount === "number" ? amount : Number(amount)) === amount
      ? ""
      : "-";
  let amtStr = Math.abs(
    typeof amount === "number" ? amount : Number(amount)
  ).toFixed(2);
  for (let i = amtStr.length - 6; i > 0; i -= 3) {
    amtStr = `${amtStr.substring(0, i)},${amtStr.substring(i, amtStr.length)}`;
  }
  return `${sign} MYR ${amtStr}`;
};

const AddFunction = (props: any) => {
  const { Max, Quantity, Price } = props;
  var Q = Quantity;
  var M = Max;
  Q++;

  if (Q === M || Q > M) {
    return {
      ...props,
      Quantity: M,
      TotalAmount: Price * M,
    };
  } else {
    return {
      ...props,
      Quantity: Q,
      TotalAmount: Price * Q,
    };
  }
};
const MinusFunction = (props: any) => {
  const { Max, Quantity, Price } = props;
  var Q = Quantity;
  var M = Max;
  Q--;
  if (Quantity === 0 || Quantity < 0 || Quantity === 1) {
    return {
      ...props,
      Quantity: 1,
      TotalAmount: Price * 1,
    };
  } else if (Q === M) {
    return {
      ...props,
      Quantity: M,
      TotalAmount: Price * M,
    };
  } else {
    return {
      ...props,
      Quantity: Q,
      TotalAmount: Price * Q,
    };
  }
};

export { AmtStr, AddFunction, MinusFunction };
