import s from "./BrokerHeader.module.css";
import { useSelector, useDispatch } from "react-redux";
import { userSelect, applicationSelect } from "../../../store/slices/managerSelect";
import { emailSelect, groupSelect, dateSelect } from "../../../store/slices/sortBroker";

const BrokerHeader = () => {

  const managerSelect = useSelector(store => store.managerSelect);
  const sortBroker = useSelector(store => store.sortBroker)
  const dispatch = useDispatch();

  console.log(sortBroker);
  return (
    <div className={s.header}>
      <div className={s.left}>
        <span>Сортировка:</span>
        <button className={sortBroker.email ? s.sortBtn + ' ' + s.activ : s.sortBtn} onClick={() => dispatch(emailSelect())}>E-mail</button>
        <button className={sortBroker.group ? s.sortBtn + ' ' + s.activ : s.sortBtn} onClick={() => dispatch(groupSelect())}>Group</button>
        <button className={sortBroker.date ? s.sortBtn + ' ' + s.activ : s.sortBtn} onClick={() => dispatch(dateSelect())}>Date</button>
      </div>
      <div className={s.right}>
        <button className={managerSelect.users ? s.sortBtn + ' ' + s.activ : s.sortBtn} onClick={() => dispatch(userSelect())}>Users</button>
        <button className={managerSelect.application ? s.sortBtn + ' ' + s.activ : s.sortBtn} onClick={() => dispatch(applicationSelect())}>Заявки</button>
      </div>
    </div>
  );
};

export default BrokerHeader;
