import s from "./CloseBtn.module.css";
import { useDispatch, useSelector } from "react-redux";

import { closeModal } from "../../../store/slices/modal";
import { ReactComponent as Close } from "../../../assets/icons/CloseBtn.svg";

const CloseBtn = () => {
  const dispatch = useDispatch();
  const modalActive = useSelector(store => store.modal);
  console.log(modalActive)
  return (
    <div className={modalActive.modalCreate ? s.closeBlockCreate : s.closeBlockWatch}>
      <button className={s.close} onClick={() => dispatch(closeModal())}>
        <Close />
      </button>
    </div>
  );
};

export default CloseBtn;
