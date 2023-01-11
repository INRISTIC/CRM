import { useSelector, useDispatch } from "react-redux";

import { changeHeaderBroker, checkboxHeaderBroker, clearingHeaderBroker } from "../../../store/slices/brokerFilter";

import s from "./UsersHeader.module.css";

const UsersHeader = () => {
  const dispatch = useDispatch();
  const filter = useSelector((store) => store.brokerFilter);
  const handleChange = (e, type) => {
    dispatch(changeHeaderBroker({ value: e.target.value, type: type }));
  };

  console.log(filter);

  return (
    <div className={s.header}>
      <div className={s.hightSearch}>
        <input
          type="text"
          value={filter.position}
          placeholder="Положение"
          className={s.geo}
          onChange={(e) => handleChange(e, "position")}
        />
        <div className={s.subInputs}>
          <label className={s.inputBlock}>
            <span className={s.headerinput}>Мин. срок</span>
            <input
              type="text"
              placeholder="06.12.2022"
              className={s.intervalDate}
              value={filter.timeMinInterval}
              onChange={(e) => handleChange(e, "timeMinInterval")}
            />
          </label>
          <label className={s.inputBlock}>
            <span className={s.headerinput}>Макс. срок</span>
            <input
              type="text"
              placeholder="06.12.2022"
              className={s.intervalDate}
              value={filter.timeMaxInterval}
              onChange={(e) => handleChange(e, "timeMaxInterval")}
            />
          </label>
        </div>
        <div className={s.subInputs}>
          <label className={s.inputBlock}>
            <span className={s.headerinput}>Мин. стоимость</span>
            <input
              type="text"
              placeholder="100 000 руб."
              className={s.intervalCost}
              value={filter.costMinInterval}
              onChange={(e) => handleChange(e, "costMinInterval")}
            />
          </label>
          <label className={s.inputBlock}>
            <span className={s.headerinput}>Макс. стоимость</span>
            <input
              type="text"
              placeholder="100 000 руб."
              className={s.intervalCost}
              value={filter.costMaxInterval}
              onChange={(e) => handleChange(e, "costMaxInterval")}
            />
          </label>
        </div>
      </div>
      <div className={s.lowSearch}>
        <input
          type="text"
          placeholder="Застройщик"
          className={s.lSFinput}
          value={filter.developer}
          onChange={(e) => handleChange(e, "developer")}
        />
        <input
          type="text"
          placeholder="Тип комнат"
          className={s.lSSinput}
          value={filter.typeRoom}
          onChange={(e) => handleChange(e, "typeRoom")}
        />
        <div>
          <input
            type="checkbox"
            id="check"
            name="check"
            className={s.customCheckbox}
            checked={filter.finishing}
            onChange={() => dispatch(checkboxHeaderBroker())}
          />
          <label htmlFor="check" className={s.checkbox}>
            Отделка
          </label>
        </div>
        <div className={s.buttons}>
          <button className={s.firstBtn} onClick={() => dispatch(clearingHeaderBroker())}>Очистить фильтры</button>
          <button className={s.secondBtn}>Поиск</button>
        </div>
      </div>
    </div>
  );
};

export default UsersHeader;
