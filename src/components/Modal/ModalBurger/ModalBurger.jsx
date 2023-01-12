import { useDispatch, useSelector } from "react-redux";

import { closeModal } from "../../../store/slices/modal";

import {
  changeMenuBroker,
  changeMenuManager,
  changeMenuUsers,
} from "../../../store/slices/burgerMenu";

import s from "./ModalBurger.module.css";

const ModalBurger = () => {
  const menu = useSelector((store) => store.menuSlice);

  const dispatch = useDispatch();
  return (
    <div className={s.burgerModal}>
      <button
        className={menu.broker ? s.btn + " " + s.activ : s.btn}
        onClick={() => {
          dispatch(changeMenuBroker());
          dispatch(closeModal());
        }}
      >
        Broker
      </button>
      <button
        className={menu.manager ? s.btn + " " + s.activ : s.btn}
        onClick={() => {
          dispatch(changeMenuManager());
          dispatch(closeModal());
        }}
      >
        Manager
      </button>
      <button
        className={menu.users ? s.btn + " " + s.activ : s.btn}
        onClick={() => {
          dispatch(changeMenuUsers());
          dispatch(closeModal());
        }}
      >
        User
      </button>
    </div>
  );
};

export default ModalBurger;
