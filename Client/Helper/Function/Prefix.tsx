export const PrefixForOrder = () => {
  const value = (storeId: number, Prefix: string, digit?: number) => {
    let FollowingNumber = (12 || 0) + 1;
    let NumberString = "";
    let AddNumber = "";
    const zeroPad = (num: number, places: number) =>
      String(num).padStart(places, "0");

    digit &&
      ((NumberString = FollowingNumber.toString()),
      NumberString.length < digit &&
        (AddNumber = zeroPad(FollowingNumber, digit - NumberString.length)));
    AddNumber = zeroPad(FollowingNumber, 6);

    return `${Prefix}${AddNumber}`;
  };

  return { value };
};
