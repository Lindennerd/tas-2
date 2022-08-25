import moment from "moment";

export function useFormatDate() {
  return (date: Date | undefined) => {
    if (date === undefined) return "";
    return moment(date).format("DD-MM-YYYY hh:mm");
  };
}
