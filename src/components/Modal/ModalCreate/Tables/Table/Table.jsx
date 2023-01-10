import TableRow from "./TableRow/TableRow";
import DeleteTableBtn from "../DeleteTableBtn/DeleteTableBtn";

import s from "./Table.module.css";

const Table = ({ info, idTable }) => {

  return (
    <div className={s.tableBlock}>
      <div className={s.tableHeader}>
        <div>
          <span>ТИП</span>
          <span>ЦЕНА</span>
          <span>S</span>
          <span>Отделка</span>
        </div>
        <div>
          <DeleteTableBtn />
        </div>
      </div>
      <div className={s.tableMain}>
        <table className={s.table}>
          <tbody>
            {info.map((row, index) => (
              <TableRow info={row.content} index={index} id={row.id} key={row.id} idTable={idTable}/>
            ))}
          </tbody>
        </table>
      </div>
      <button className={s.add}>Добавить</button>
    </div>
  );
};

export default Table;
