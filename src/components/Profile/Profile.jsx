import { useState, useLayoutEffect, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ReactComponent as Burger } from "../../assets/icons/burger.svg";

import { modalBurgerSelect, closeModal } from "../../store/slices/modal";
import {
  changeMenuBroker,
  changeMenuManager,
  changeMenuUsers,
} from "../../store/slices/burgerMenu";

import Broker from "../Broker/Broker";
import Users from "../Users/Users";
import Manager from "../Manager/Manager";

import s from "./Profile.module.css";

function useWindowSize() {
  const [size, setSize] = useState([0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

const Profile = () => {
  const menu = useSelector((store) => store.menuSlice);
  const modal = useSelector((store) => store.modal);

  const dispatch = useDispatch();

  const [width] = useWindowSize();

  useEffect(() => {
    if (width > 1600 && modal.modalBurger) {
      dispatch(closeModal())
    }
  }, [width, modal.modalBurger])
  

  return (
    <div className={s.block}>
      {width <= 1600 ? (
        <div className={s.smallBurger}>
          <button onClick={() => dispatch(modalBurgerSelect())}>
            <Burger />
          </button>
        </div>
      ) : (
        <div className={s.burger}>
          <button
            className={menu.broker ? s.btn + " " + s.activ : s.btn}
            onClick={() => dispatch(changeMenuBroker())}
          >
            Broker
          </button>
          <button
            className={menu.manager ? s.btn + " " + s.activ : s.btn}
            onClick={() => dispatch(changeMenuManager())}
          >
            Manager
          </button>
          <button
            className={menu.users ? s.btn + " " + s.activ : s.btn}
            onClick={() => dispatch(changeMenuUsers())}
          >
            User
          </button>
        </div>
      )}

      <div className={s.content}>
        {menu.broker && <Users />}
        {menu.manager && <Manager />}
        {menu.users && <Broker />}
      </div>
    </div>
  );
};

export default Profile;
