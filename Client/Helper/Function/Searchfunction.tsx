const SearchFunction = (
  text: string,
  Array: Array<any>,
  EachItem?: Array<any>
) => {
  var k = text?.toLowerCase();

  return Array?.filter((x, index) => {
    return text === undefined || text === "" || text === null
      ? x
      : EachItem?.some((name) => {
          if (x[name]?.toLowerCase().includes(k) === true) {
            return x;
          }
        });
  });
};

const SelectTab = (text: string, Array: Array<any>) => {
  return Array?.filter((k) => {
    if (text === "" || text === null) {
      return k;
    } else if (k[text] === true) {
      return k;
    }
  });
};
const SelectDepartment = (text: string, Array: Array<any>) => {
  return Array?.filter((k) => {
    if (text === "" || text === null || text === "Info") {
      return k;
    } else if (k.itemName === text) {
      return k;
    }
  });
};

export { SearchFunction, SelectTab, SelectDepartment };
