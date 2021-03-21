import react from "react";
import { Dimensions } from "react-native";

const PageSize = () => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  return {
    windowWidth,
    windowHeight,
  };
};

export default PageSize;
