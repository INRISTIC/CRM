import { useDispatch, useSelector } from "react-redux";
import uuid from "react-uuid";

import { addRow, tableChange } from "../../../../../store/slices/formInfo";

import TableRow from "./TableRow/TableRow";
import DeleteTableBtn from "../DeleteTableBtn/DeleteTableBtn";

import s from "./Table.module.css";

const Table = ({ info, idTable }) => {
  const dispatch = useDispatch();

  const onDefaultRow = () => {
    return {
      id: uuid(),
      content: ["", "", "", ""],
    };
  };

  const handleChange = (e) => {
    dispatch(tableChange({ value: e.target.value, idTable: idTable }));
  };

  const onCreateRow = () => {
    dispatch(addRow({ row: onDefaultRow(), idTable }));
  };

  return (
    <>
      <input
        type="text"
        className={s.inputDedline}
        placeholder="Сроки сдачи"
        onChange={handleChange}
      />
      <div className={s.tableBlock}>
        <div className={s.tableHeader}>
          <div>
            <span>ТИП</span>
            <span>ЦЕНА</span>
            <span>S</span>
            <span>Отделка</span>
          </div>
          <DeleteTableBtn idTable={idTable} />
        </div>
        <div className={s.tableMainBlock}>
          <div className={s.tableMain}>
            <table className={s.table}>
              <tbody>
                {info.map((row, index) => (
                  <TableRow
                    info={row.content}
                    index={index}
                    id={row.id}
                    key={row.id}
                    idTable={idTable}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <button className={s.add} onClick={onCreateRow}>
          Добавить
        </button>
      </div>
    </>
  );
};

export default Table;
