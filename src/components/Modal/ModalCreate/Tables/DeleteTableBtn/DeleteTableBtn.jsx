import { deleteTable } from "../../../../../store/slices/formInfo";

import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as Close } from "../../../../../assets/icons/CloseBtn.svg";

import s from "./DeleteTableBtn.module.css";

const DeleteTableBtn = ({idTable}) => {
  const dispatch = useDispatch();
  return (
      <button className={s.close} onClick={() => dispatch(deleteTable({idTable: idTable}))}>
        <Close />
      </button>
  );
};

export default DeleteTableBtn;
