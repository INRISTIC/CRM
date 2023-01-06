import s from "./Basic.module.css";

const Basic = () => {
  return (
    <>
      <div className={s.highBlock}>
        <div className={s.Selectleft}>
          <div className={s.selectBlock}>
            <div className={s.header}>Метка</div>
            <div className={s.select}>Выберете из списка</div>
          </div>
          <div className={s.selectBlock}>
            <div className={s.header}>Статус</div>
            <div className={s.select}>Выберете из списка</div>
          </div>
        </div>
        <div className={s.SelectRight}>
          <div className={s.selectBlockShorts}>
            <div className={s.header}>Активно</div>
            <div className={s.YesNoBlock}>
              <button className={s.selectShorts}>Да</button>
              <button className={s.selectShorts}>Нет</button>
            </div>
          </div>
          <div className={s.selectBlockShorts}>
            <div className={s.header}>Верификация</div>
            <div className={s.YesNoBlock}>
              <button className={s.selectShorts}>Да</button>
              <button className={s.selectShorts}>Нет</button>
            </div>
          </div>
        </div>
      </div>
      <div className={s.columns}>
        <div className={s.column}>
          <div className={s.select}>Название оффера</div>
          <div className={s.select}>Номер телефона</div>
          <div className={s.select}>График в будни</div>
          <div className={s.select}>Город</div>
          <div className={s.select}>Координата X</div>
        </div>
        <div className={s.column}>
          <div className={s.select}>Название застройщика</div>
          <div className={s.select}>Краткий телефон</div>
          <div className={s.select}>График в выходные</div>
          <div className={s.select}>Локация</div>
          <div className={s.select}>Координата Y</div>
        </div>
      </div>
      <div className={s.footer}>
        <div className={s.select}>Доход для компании</div>
        <div className={s.select}>Доход для сотрудника</div>
        <div className={s.select}>Лимит</div>
      </div>
      <button className={s.btn}>Сохранить</button>
    </>
  );
};

export default Basic;
