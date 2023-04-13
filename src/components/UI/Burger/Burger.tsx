import React from "react";
import IconBtn from "../IconBtn";
import useBurger from "./useBurger";

const Burger = () => {
  const { isActiveBurger, activeHandler } = useBurger();
  return (
    <IconBtn
      onClick={activeHandler}
      type={isActiveBurger ? "closeNewMessage" : "burger"}
    />
  );
};
export default Burger;
