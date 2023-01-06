import s from "./CloseBtn.module.css";
import { useDispatch } from "react-redux";

import { closeModal } from "../../../store/slices/modal";
import { ReactComponent as Close } from "../../../assets/icons/CloseBtn.svg";

const CloseBtn = () => {
  const dispatch = useDispatch();
  return (
    <div className={s.closeBlock}>
      <button className={s.close} onClick={() => dispatch(closeModal())}>
        <Close />
      </button>
    </div>
  );
};

export default CloseBtn;
