import { useRef, useState } from "react";
import { Animated, Easing } from "react-native";

const useAnimation = function (initialValue: number = 0) {
  const endValue = initialValue === 0 ? 1 : 0;
  const animationValueRef = useRef(new Animated.Value(initialValue)).current;

  const setup = (config: Partial<Animated.TimingAnimationConfig> = {}) =>
    Animated.timing(animationValueRef, {
      toValue: endValue,
      useNativeDriver: true,
      easing: Easing.inOut(Easing.quad),
      ...config,
    });

  return {
    value: animationValueRef,
    setup,
  };
};

const CalcWidth = (title: string, Percentage: number) => {
  let value = 0;
  let string = "";
  switch (title) {
    case "InProgress":
      value = Percentage;
      string = "In Progress";
      break;
    case "Completed":
      value = Percentage;
      string = "Complete";
      break;
    case "Success":
      value = Percentage;
      string = "Success";
      break;
    default:
      string = title;
      value = Percentage;
  }
  return {
    value,
    string,
  };
};

export { useAnimation, CalcWidth };
