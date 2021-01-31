import React from "react";

interface Number {
  amount: string | number;
}

const AmtStr = (amount: string | number) => {
  console.log(
    "🚀 ~ file: AmountFunction.tsx ~ line 8 ~ AmtStr ~ amount",
    amount
  );
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

export { AmtStr };
