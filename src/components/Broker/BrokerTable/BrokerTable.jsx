
import BrokerItem from "./BrokerItem/BrokerItem";
import s from "./BrokerTable.module.css";

const BrokerTable = () => {
  return (
      <div className={s.mainBlock}>
      <table className={s.main}>
        <thead className={s.header}>
          <tr>
            <th>Id</th>
            <th>mail</th>
            <th>group</th>
            <th>created_date</th>
          </tr>
        </thead>
        <tbody className={s.listItems}>
          <BrokerItem />
        </tbody>
      </table>
    </div>
  );
};

export default BrokerTable;
