import { useDispatch } from "react-redux";
import { modalWatchSelect } from "../../../../store/slices/modal";
import s from "./UserItem.module.css";


const UsersItem = () => {

  const dispatch = useDispatch()

  return (
    <tr className={s.item} onClick={() => dispatch(modalWatchSelect())}>
      <td><span className={s.status}></span></td>
      <td>M</td>
      <td>ЦАО</td>
      <td>Эталон</td>
      <td>ЖК селигер</td>
      <td>+7-999-999-99-99</td>
      <td>ЦАО, Пресненский район, Шмитовский проспкт, дом 37</td>
      <td>1 кв. 2023 2 кв. 2023</td>
      <td>10:00 - 22:00 МСК</td>
      <td>100</td>
      <td>30 000 руб.</td>
    </tr>
  );
};

export default UsersItem;
