import { useDispatch } from "react-redux";
import { modalCreateSelect } from "../../../store/slices/modal";

import s from "./ManagerHeader.module.css";

const ManagerHeader = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className={s.header}>
        <div className={s.left}>
          <div className={s.checkbox1}>
            <span className={s.headerCheck}>Активный</span>
            <div>
              <input
                type="checkbox"
                name="activ"
                id="YesActiv"
                className={s.radio}
              />
              <label htmlFor="YesActiv" className={s.labelCheck1}>
                Да
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="NoActiv"
                name="activ"
                className={s.radio}
              />
              <label htmlFor="NoActiv" className={s.labelCheck1}>
                Нет
              </label>
            </div>
          </div>
          <div className={s.checkbox2}>
            <span className={s.headerCheck}>Верифицированные</span>
            <div>
              <input
                type="checkbox"
                id="YesVerf"
                name="verif"
                className={s.radio}
              />
              <label htmlFor="YesVerf" className={s.labelCheck1}>
                Да
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="NoVerf"
                name="verif"
                className={s.radio}
              />
              <label htmlFor="NoVerf" className={s.labelCheck2}>
                Нет
              </label>
            </div>
          </div>
          <div className={s.buttons}>
            <button className={s.firstBtn}>Очистить фильтры</button>
            <button className={s.secondBtn}>Поиск</button>
          </div>
        </div>
        <div className={s.right}>
          <button
            className={s.secondBtn}
            onClick={() => dispatch(modalCreateSelect())}
          >
            Добавить
          </button>
        </div>
      </div>
    </>
  );
};

export default ManagerHeader;
