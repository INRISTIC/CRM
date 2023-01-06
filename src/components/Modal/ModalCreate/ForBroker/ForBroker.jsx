import s from "./ForBroker.module.css";

const ForBroker = () => {
  return (
    <>
      <div className={s.high}>
        <div className={s.header}>Аппартаменты</div>
        <div className={s.btnsBlock}>
          <button className={s.btn}>Да</button>
          <button className={s.btn}>Нет</button>
        </div>
      </div>
      <div className={s.main}>
        <textarea placeholder="Описание">

        </textarea>
        <textarea placeholder="Скрипт">

        </textarea>
        <textarea placeholder="Правила">

        </textarea>
      </div>
      <button className={s.saveBtn}>Сохранить</button>
    </>
  );
};

export default ForBroker;
