import { useSelector, useDispatch } from "react-redux";
import {
  modalCreateSelect,
  modalWatchSelect,
  closeModal,
} from "../../store/slices/modal";

import ModalCreate from "./ModalCreate/ModalCreate";
import ModalWatch from "./ModalWatch/ModalWatch";
import ModalBurger from "./ModalBurger/ModalBurger";

import s from "./Modal.module.css";

const Modal = ({ active, setActive }) => {
  const modalStatus = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  return (
    <div
      className={
        modalStatus.modalCreate ||
        modalStatus.modalWatch ||
        modalStatus.modalBurger
          ? s.modal + " " + s.active
          : s.modal
      }
      onClick={() => dispatch(closeModal())}
    >
      {modalStatus.modalCreate || modalStatus.modalWatch ? (
        <div
          className={modalStatus.modalCreate ? s.contentCreate : s.contentWatch}
          onClick={(e) => e.stopPropagation()}
        >
          {modalStatus.modalCreate && <ModalCreate />}
          {modalStatus.modalWatch && <ModalWatch />}
        </div>
      ) : undefined}

      {modalStatus.modalBurger ? (
        <div
          className={s.modalBurger}
          onClick={(e) => e.stopPropagation()}
        >
          {modalStatus.modalBurger && <ModalBurger />}
        </div>
      ) : undefined}
    </div>
  );
};

export default Modal;
