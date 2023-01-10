import { useDispatch } from "react-redux";

import { tdChange } from "../../../../../../store/slices/formInfo";

import s from "./TableRow.module.css";

const TableRow = ({ info, id, idTable, index }) => {
  const dispatch = useDispatch();
  console.log(info);
  const handleChange = (e, elem) => {
    dispatch(
      tdChange({ idTable: idTable, id: id, index: index, value: e.target.value, elem: elem })
    );
  };

  return (
    <tr>
      <td>
        <input type="text" value={info[0]} placeholder="TEXT" onChange={(e) => handleChange(e, 0)} />
      </td>
      <td>
        <input type="text" value={info[1]} placeholder="TEXT" onChange={(e) => handleChange(e, 1)} />
      </td>
      <td>
        <input type="text" value={info[2]} placeholder="TEXT" onChange={(e) => handleChange(e, 2)} />
      </td>
      <td>
        <input type="text" value={info[3]} placeholder="TEXT" onChange={(e) => handleChange(e, 3)} />
      </td>
      <td>
        <button className={s.delete}>Удалить</button>
      </td>
    </tr>
  );
};

export default TableRow;
