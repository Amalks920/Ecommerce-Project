

import { useSelector } from "react-redux";

const isUserPresent = () => {
  const state = useSelector((state) => state.user);
  return !!state;
};

export default isUserPresent;
