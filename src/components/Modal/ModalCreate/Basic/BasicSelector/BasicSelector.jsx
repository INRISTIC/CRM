
import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { basicSelectorChange, basicSelectorContent } from "../../../../../store/slices/formInfo";

import { ReactComponent as Arrow } from "../../../../../assets/icons/arrowRigth.svg";

import s from "./BasicSelector.module.css";

const BasicSelector = ({ header, list, type, content }) => {
  const selectorRef = useRef(null);

  const dispatch = useDispatch()
  const active = useSelector(store => store.formInfo.basic.activSelect);

  const closeSelector = () => {
    console.log(19)
    dispatch(basicSelectorChange({type: ""}))
  }


  useEffect(() => {
    if (active !== type) {
      console.log(active, type)
      return
    };
    const handleClick = (e) => {
      if (!selectorRef.current) return;
      if (!selectorRef.current.contains(e.target)) {
        closeSelector()
      }
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.addEventListener('click', handleClick)
    }
  }, [active, closeSelector])


  
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
          <div className={s.listBlock} ref={selectorRef}>
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
