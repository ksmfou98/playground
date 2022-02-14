import axios from "axios";

export const getTestList = async () => {
  const res = await axios.get("https://api2.ncnc.app/con-items/soon");
  return res.data;
};
