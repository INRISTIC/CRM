import UsersItem from "./UserItem/UserItem";
import s from "./UsersTable.module.css";

const UsersTable = () => {
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
            <th>Сроки</th>
            <th>Время выполнения работы</th>
            <th>Лимит</th>
            <th>Прайс</th>
          </tr>
        </thead>
        <tbody className={s.listItems}>
          <UsersItem />
          <UsersItem />
          <UsersItem />
          <UsersItem />
          <UsersItem />
          <UsersItem />
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
