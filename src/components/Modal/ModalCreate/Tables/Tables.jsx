import { useSelector, useDispatch } from "react-redux";

import { addTable } from "../../../../store/slices/formInfo";

import Table from "./Table/Table";
import uuid from "react-uuid";

import s from "./Tables.module.css";

const Tables = () => {
  const tables = useSelector((store) => store.formInfo.tables);
  const dispatch = useDispatch();

  console.log(tables);

  const createTables = () => {
    return {
      id: uuid(),
      date: undefined,
      info: [
        {
          id: uuid(),
          content: ["", "", "", ""],
        },
      ],
    };
  };

  return (
    <>
      <div className={s.createTables}>
        {tables.map((table) => (
          <Table info={table.info} idTable={table.id} key={table.id} />
        ))}
      </div>
      <div className={s.btns}>
        <button className={s.add} onClick={() => dispatch(addTable({table: createTables()}))}>Добавить таблицу</button>
        <button className={s.save}>Сохранить</button>
      </div>
    </>
  );
};

export default Tables;
