import { useState } from "react";

import CloseBtn from "../CloseBtn/CloseBtn";

import Basic from "./Basic/Basic";
import ForBroker from "./ForBroker/ForBroker";
import Content from "./Content/Content";
import Tables from "./Tables/Tables";

import s from "./ModalCreate.module.css";

const ModalCreate = () => {
  const initialState = {
    basic: false,
    forBroker: false,
    content: false,
    tables: false,
  };

  const [select, setSelect] = useState({
    basic: true,
    forBroker: false,
    content: false,
    tables: false,
  });

  return (
    <>
      <CloseBtn />
      <div className={s.header}>
        <button
          className={select.basic ? s.activBtn + " " + s.btn : s.btn}
          onClick={() => setSelect({ ...initialState, basic: true })}
        >
          Основные
        </button>
        <button
          className={select.forBroker ? s.activBtn + " " + s.btn : s.btn}
          onClick={() => setSelect({ ...initialState, forBroker: true })}
        >
          Для брокера
        </button>
        <button
          className={select.tables ? s.activBtn + " " + s.btn : s.btn}
          onClick={() => setSelect({ ...initialState, tables: true })}
        >
          Таблицы
        </button>
        <button
          className={select.content ? s.activBtn + " " + s.btn : s.btn}
          onClick={() => setSelect({ ...initialState, content: true })}
        >
          Контент
        </button>
      </div>
      <div>
        {select.basic && <Basic />}
        {select.forBroker && <ForBroker />}
        {select.content && <Content />}
        {select.tables && <Tables />}
      </div>
    </>
  );
};

export default ModalCreate;
