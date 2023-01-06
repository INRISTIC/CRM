import TableItem from "./TableItem/TableItem";

import s from "./ModalTables.module.css";

const ModalTables = () => {
  return (
    <>
      <div className={s.row}>
        <TableItem />
        <TableItem />
      </div>
      <div className={s.row}>
        <TableItem />
        <TableItem />
      </div>
    </>
  );
};

export default ModalTables;
