import React from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { actions as navbarActions } from "../../../store/reducers/navbarSlice/navbarSlice";
const UseBurger = () => {
  const dispatch = useAppDispatch();
  const { isActiveBurger } = useAppSelector((state) => state.navbar);
  const activeHandler = () => {
    dispatch(navbarActions.changeActiveBurger(!isActiveBurger));
  };

  return {
    isActiveBurger,
    activeHandler,
  };
};

export default UseBurger;
