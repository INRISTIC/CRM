import { useSelector, useDispatch } from "react-redux";

import Table from "./Table/Table";

import s from "./Tables.module.css";

const Tables = () => {
  const tables = useSelector((store) => store.formInfo.tables);
  const countsTables = tables.length;
  console.log(tables, countsTables);

  return (
    <>
      <input type="text" className={s.input} placeholder="Сроки сдачи" />
      <div className={s.createTables}>
        {tables.map((table) => (
          <Table
            info={table.info}
            idTable={table.id}
            key={table.id}
          />
        ))}
      </div>
      <div className={s.btns}>
        <button className={s.add}>Добавить таблицу</button>
        <button className={s.save}>Сохранить</button>
      </div>
    </>
  );
};

export default Tables;
