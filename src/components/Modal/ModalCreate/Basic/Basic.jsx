import { useDispatch, useSelector } from "react-redux";

import { basicChange, basicCheckbox } from "../../../../store/slices/formInfo";

import s from "./Basic.module.css";

const Basic = () => {
  const basic = useSelector((store) => store.formInfo.basic);
  const dispatch = useDispatch();
  const handleChange = (e, type) => {
    dispatch(basicChange({ value: e.target.value, inpt: type }));
  };
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
              <button
                className={
                  basic.activ
                    ? s.selectShorts + " " + s.selectShortsActive
                    : s.selectShorts
                }
                onClick={() =>
                  dispatch(basicCheckbox({ type: "activ", status: true }))
                }
              >
                Да
              </button>
              <button
                className={
                  !basic.activ
                    ? s.selectShorts + " " + s.selectShortsActive
                    : s.selectShorts
                }
                onClick={() =>
                  dispatch(basicCheckbox({ type: "activ", status: false }))
                }
              >
                Нет
              </button>
            </div>
          </div>
          <div className={s.selectBlockShorts}>
            <div className={s.header}>Верификация</div>
            <div className={s.YesNoBlock}>
              <button
                className={
                  basic.verif
                    ? s.selectShorts + " " + s.selectShortsActive
                    : s.selectShorts
                }
                onClick={() =>
                  dispatch(basicCheckbox({ type: "verif", status: true }))
                }
              >
                Да
              </button>
              <button
                className={
                  !basic.verif
                    ? s.selectShorts + " " + s.selectShortsActive
                    : s.selectShorts
                }
                onClick={() =>
                  dispatch(basicCheckbox({ type: "verif", status: false }))
                }
              >
                Нет
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={s.columns}>
        <div className={s.column}>
          <input
            value={basic.nameOffer}
            type="text"
            className={s.select}
            placeholder="Название оффера"
            onChange={(e) => handleChange(e, "nameOffer")}
          />
          <input
            value={basic.numberPhone}
            type="text"
            className={s.select}
            placeholder="Номер телефона"
            onChange={(e) => handleChange(e, "numberPhone")}
          />
          <input
            value={basic.graficWorkDay}
            type="text"
            className={s.select}
            placeholder="График в будни"
            onChange={(e) => handleChange(e, "graficWorkDay")}
          />
          <input
            value={basic.city}
            type="text"
            className={s.select}
            placeholder="Город"
            onChange={(e) => handleChange(e, "city")}
          />
          <input
            value={basic.coordinateX}
            type="text"
            className={s.select}
            placeholder="Координата X"
            onChange={(e) => handleChange(e, "coordinateX")}
          />
        </div>
        <div className={s.column}>
          <input
            value={basic.nameBuilder}
            type="text"
            className={s.select}
            placeholder="Название застройщика"
            onChange={(e) => handleChange(e, "nameBuilder")}
          />
          <input
            value={basic.numberShortPhone}
            type="text"
            className={s.select}
            placeholder="Краткий телефон"
            onChange={(e) => handleChange(e, "numberShortPhone")}
          />
          <input
            value={basic.graficWeekend}
            type="text"
            className={s.select}
            placeholder="График в выходные"
            onChange={(e) => handleChange(e, "graficWeekend")}
          />
          <input
            value={basic.location}
            type="text"
            className={s.select}
            placeholder="Локация"
            onChange={(e) => handleChange(e, "location")}
          />
          <input
            value={basic.coordinateY}
            type="text"
            className={s.select}
            placeholder="Координата Y"
            onChange={(e) => handleChange(e, "coordinateY")}
          />
        </div>
      </div>
      <div className={s.footer}>
        <input
          value={basic.income}
          type="text"
          className={s.select}
          placeholder="Доход для компании"
          onChange={(e) => handleChange(e, "income")}
        />
        <input
          value={basic.employeeIncome}
          type="text"
          className={s.select}
          placeholder="Доход для сотрудника"
          onChange={(e) => handleChange(e, "employeeIncome")}
        />
        <input
          value={basic.limit}
          type="text"
          className={s.select}
          placeholder="Лимит"
          onChange={(e) => handleChange(e, "limit")}
        />
      </div>
      <button className={s.btn}>Сохранить</button>
    </>
  );
};

export default Basic;
