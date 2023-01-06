import s from "./ManagerHeader.module.css";

const ManagerHeader = () => {
  return (
    <>
      <div className={s.header}>
        <div className={s.left}>
          <div className={s.checkbox1}>
            <span className={s.headerCheck}>Активный</span>
            <label htmlFor="" className={s.labelCheck1}>
              <input type="checkbox" />
              Да
            </label>
            <label htmlFor="">
              <input type="checkbox" className={s.labelCheck2}/>
              Нет
            </label>
          </div>
          <div className={s.checkbox2}>
          <span className={s.headerCheck}>Верифицированные</span>
            <label htmlFor="" className={s.labelCheck1}>
              <input type="checkbox" />
              Да
            </label>
            <label htmlFor="">
              <input type="checkbox" className={s.labelCheck2}/>
              Нет
            </label>
          </div>
          <div className={s.buttons}>
            <button className={s.firstBtn}>Очистить фильтры</button>
            <button className={s.secondBtn}>Поиск</button>
          </div>
        </div>
        <div className={s.right}>
          <button className={s.secondBtn}>Добавить</button>
        </div>
      </div>
    </>
  );
};

export default ManagerHeader;
