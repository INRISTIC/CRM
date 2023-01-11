import { useSelector, useDispatch } from "react-redux";

import { basicSelectorChange, basicSelectorContent } from "../../../../../store/slices/formInfo";

import { ReactComponent as Arrow } from "../../../../../assets/icons/arrowRigth.svg";

import s from "./BasicSelector.module.css";

const BasicSelector = ({ header, list, type, content }) => {
  const dispatch = useDispatch()
  const active = useSelector(store => store.formInfo.basic.activSelect);

  return (
    <>
      <div className={s.selectBlock}>
        <div className={s.header}>{header}</div>
        <button className={s.select} onClick={() => dispatch(basicSelectorChange({type: type}))}>
          <span>{content}</span>
          <span className={s.arrow}>
            <Arrow />
          </span>
        </button>
        {active === type ? (
          <div className={s.listBlock}>
            <div className={s.list}>
              {list.map((item) => (
                <button className={s.button} key={item + type} onClick={() => dispatch(basicSelectorContent({type: type, content: item}))}>{item}</button>
              ))}
            </div>
          </div>
        ) : undefined}
      </div>
    </>
  );
};

export default BasicSelector;
