import { useState } from "react";
import { Link } from "react-router-dom"

import s from "./Autorization.module.css";

const Autorization = () => {
  const [autorization, setAuto] = useState({
    open: true,
    close: false
  });
  console.log(autorization)
  return (
    <div className={s.block}>
      <div className={s.select}>
        <button className={autorization.open ? s.selectBtn + ' ' + s.active : s.selectBtn} onClick={() => setAuto({open: true, close: false})}>Вход</button>
        <button className={autorization.close ? s.selectBtn + ' ' + s.active : s.selectBtn} onClick={() => setAuto({close: true, open: false})}>Заявка</button>
      </div>
      {autorization.open ? (
        <>
          <div className={s.blockInput}>
            <input type="email" placeholder="E-mail" className={s.input}/>
            <input type="password" placeholder="Пароль" className={s.input}/>
          </div>
          <Link to="/profile" className={s.btn}>Войти</Link>
        </>
      ) : (
        <>
          <div className={s.select}>
            <input type="email" placeholder="E-mail" className={s.input}/>
          </div>
          <Link to="/profile" className={s.btn}>Отправить</Link >
        </>
      )}
    </div>
  );
};

export default Autorization;
