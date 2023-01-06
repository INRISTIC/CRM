import s from "./BrokerItem.module.css";
import { useSelector } from "react-redux";

const BrokerItem = () => {
  const managerSelect = useSelector((store) => store.managerSelect);

  return (
    <tr className={s.item}>
      <td>1</td>
      <td>example@mail.ru</td>
      <td>user</td>
      <td>
        <span>11.03.32 08.01.2022</span>
        {managerSelect.users && (
          <div className={s.btns}>
            <button className={s.redact}>Изменить</button>
            <button className={s.delete}>Удалить</button>
          </div>
        )}

        {managerSelect.application && (
          <div className={s.btns}>
            <button className={s.complete}>Принять</button>
            <button className={s.delete}>Отклонить</button>
          </div>
        )}
      </td>
    </tr>
  );
};

export default BrokerItem;
