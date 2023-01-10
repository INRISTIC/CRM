import { useDispatch } from "react-redux";

import { tdChange, deleteRow } from "../../../../../../store/slices/formInfo";

import s from "./TableRow.module.css";

const TableRow = ({ info, id, idTable }) => {
  const dispatch = useDispatch();
  console.log(info);
  const handleChange = (e, elem) => {
    dispatch(
      tdChange({ idTable: idTable, id: id, value: e.target.value, elem: elem })
    );
  };

  const onDeleteRow = () => {
    dispatch(
      deleteRow({ idTable: idTable, id: id})
    )
  }

  return (
    <tr>
      <td>
        <input type="text" className={s.input} value={info[0]} placeholder="TEXT" onChange={(e) => handleChange(e, 0)} />
      </td>
      <td>
        <input type="text" className={s.input} value={info[1]} placeholder="TEXT" onChange={(e) => handleChange(e, 1)} />
      </td>
      <td>
        <input type="text" className={s.input} value={info[2]} placeholder="TEXT" onChange={(e) => handleChange(e, 2)} />
      </td>
      <td>
        <input type="text" className={s.input} value={info[3]} placeholder="TEXT" onChange={(e) => handleChange(e, 3)} />
      </td>
      <td>
        <button className={s.delete} onClick={onDeleteRow}>Удалить</button>
      </td>
    </tr>
  );
};

export default TableRow;
