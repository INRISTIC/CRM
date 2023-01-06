import s from "./UsersHeader.module.css";

const UsersHeader = () => {
  return (
    <div className={s.header}>
      <div className={s.hightSearch}>
        <input type="text" placeholder="Положение" className={s.geo} />
        <div className={s.subInputs}>
          <input
            type="text"
            placeholder="Мин. срок"
            className={s.intervalDate}
          />
          <input
            type="text"
            placeholder="Макс. срок"
            className={s.intervalDate}
          />
        </div>
        <div className={s.subInputs}>
          <input
            type="text"
            placeholder="Мин. стоимость"
            className={s.intervalCost}
          />
          <input
            type="text"
            placeholder="Макс. стоимость"
            className={s.intervalCost}
          />
        </div>
      </div>
      <div className={s.lowSearch}>
        <input type="text" placeholder="Застройщик" className={s.lSFinput} />
        <input type="text" placeholder="Тип комнат" className={s.lSSinput} />
        <div>
          <input type="checkbox" id="check" name="check" className={s.customCheckbox} />
          <label htmlFor="check" className={s.checkbox}>
            Отделка
          </label>
        </div>
        <div className={s.buttons}>
          <button className={s.firstBtn}>Очистить фильтры</button>
          <button className={s.secondBtn}>Поиск</button>
        </div>
      </div>
    </div>
  );
};

export default UsersHeader;
