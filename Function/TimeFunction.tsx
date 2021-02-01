import moment from "moment";
import { Moment } from "moment";

const add_minutes = (dt: Moment, minutes: number) => {
  return moment(dt).add(minutes, "minutes");
};
const totalTimeNeeded = (count: number, first?: string) => {
  var time = 0;

  if (first !== null || first !== undefined) {
    count === 1
      ? (time = 20)
      : count <= 10
      ? (time = 30)
      : count > 10
      ? (time = 40)
      : (time = 0);
  }

  if (first === null || first === undefined) {
    count === 1
      ? (time = 40)
      : count <= 10
      ? (time = 50)
      : count > 10
      ? (time = 70)
      : (time = 0);
  }

  return time;
};

export { add_minutes, totalTimeNeeded };
