import { useDispatch } from "react-redux";
import { modalCreateSelect } from "../../../../store/slices/modal";

import s from "./ManagerItem.module.css";

const ManagerItem = () => {

  const dispatch = useDispatch()

  return (
    <tr className={s.item} onClick={() => dispatch(modalCreateSelect())}>
      <td><span className={s.status}></span></td>
      <td>M</td>
      <td>ЦАО</td>
      <td>Эталон</td>
      <td>ЖК селигер</td>
      <td>+7-999-999-99-99</td>
      <td>ЦАО, Пресненский район, Шмитовский проспкт, дом 37</td>
      <td>100</td>
      <td>300 000 руб</td>
      <td className={s.statusHigh}><span className={s.status}></span></td>
      <td className={s.statusHigh}><span className={s.status}></span></td>
      <td className={s.statusHigh}><span className={s.status}></span></td>
      <td className={s.statusHigh}><span className={s.status}></span></td>
      <td className={s.statusHigh}><span className={s.status}></span></td>
      <td className={s.statusHigh}><span className={s.status}></span></td>
      <td className={s.statusHigh}><span className={s.status}></span></td>
    </tr>
  );
};

export default ManagerItem;