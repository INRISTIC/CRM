import s from "./Content.module.css";

const Content = () => {
  return (
    <>
      <div className={s.inputMain}>
        <label className={s.inputBlock}>
          <span className={s.header}>Сайт</span>
          <input type="text" className={s.input} placeholder="Введите ссылку" />
        </label>
        <label className={s.inputBlock}>
          <span className={s.header}>Сайт</span>
          <input type="text" className={s.input} placeholder="..." />
        </label>
      </div>
      <div className={s.btns}>
        <button>Импорт</button>
        <button>Удалить</button>
      </div>
      <button className={s.btn}>Сохранить</button>
    </>
  );
};

export default Content;
