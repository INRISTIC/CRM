import { useSelector } from "react-redux";

import BrokerItem from "./BrokerItem/BrokerItem";
import s from "./BrokerTable.module.css";

const BrokerTable = () => {
  const managerSelect = useSelector((store) => store.managerSelect);

  return (
    <div className={s.mainBlock}>
      <table className={managerSelect.users ? s.mainUsers : s.mainApplication}>
        <thead className={s.header}>
          <tr>
            <th>Id</th>
            <th>mail</th>
            {!managerSelect.users ? (
              <th>status</th>
            ) : (
              <>
                <th>group</th>
                <th>created_date</th>
              </>
            )}
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
