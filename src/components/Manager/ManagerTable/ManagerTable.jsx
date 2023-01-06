import s from "./ManagerTable.module.css";
import ManagerItem from "./ManagerItem/ManagerItem";

const ManagerTable = () => {
  return (
    <div className={s.mainBlock}>
      <table className={s.main}>
        <thead className={s.header}>
          <tr>
            <th>C</th>
            <th>M</th>
            <th>Округ</th>
            <th>Застройщик</th>
            <th>Название ЖК</th>
            <th>Телефоны</th>
            <th>Расположение</th>
            <th>Лимит</th>
            <th>Доход</th>
            <th className={s.date}>КР</th>
            <th className={s.date}>ВБ</th>
            <th className={s.date}>ВВ</th>
            <th className={s.date}>ОП</th>
            <th className={s.date}>СКР</th>
            <th className={s.date}>ПР</th>
            <th className={s.date}>ПРЗ</th>
          </tr>
        </thead>
        <tbody className={s.listItems}>
          <ManagerItem />
          <ManagerItem />
          <ManagerItem />
          <ManagerItem />
          <ManagerItem />
          <ManagerItem />
          <ManagerItem />
        </tbody>
      </table>
    </div>
  );
};

export default ManagerTable;
