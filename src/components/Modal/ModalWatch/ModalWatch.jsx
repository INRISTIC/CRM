import { useState } from "react";

import CloseBtn from "../CloseBtn/CloseBtn";

import ModalTables from "./ModalTables/ModalTables";
import ModalScript from "./ModalScript/ModalScript";
import ModalContent from "./ModalContent/ModalContent";
import ModalDesc from "./ModalDesc/ModalDesc";
import ModalMap from "./ModalMap/ModalMap";
import ModalRules from "./ModalRules/ModalRules";

import s from "./ModalWatch.module.css";

const ModalWatch = () => {
  const initialState = {
    table: false,
    script: false,
    content: false,
    desc: false,
    map: false,
    rules: false,
  };

  const [select, setSelect] = useState({
    table: true,
    script: false,
    content: false,
    desc: false,
    map: false,
    rules: false,
  });

  console.log(initialState);

  return (
    <>
      <div className={s.close}>
        <CloseBtn />
      </div>
      
      <div className={s.header}>
        <div className={s.one}>Название: N</div>
        <div className={s.two}>Застройщик: N</div>
        <div className={s.three}>Метка: N</div>
        <div className={s.four}>Статус: N</div>
      </div>

      <div className={s.main}>
        <div className={s.btns}>
          <button
            className={select.table ? s.activBtn + " " + s.btn : s.btn}
            onClick={() => setSelect({ ...initialState, table: true })}
          >
            Таблицы
          </button>
          <button
            className={select.desc ? s.activBtn + " " + s.btn : s.btn}
            onClick={() => setSelect({ ...initialState, desc: true })}
          >
            Описание
          </button>
          <button
            className={select.script ? s.activBtn + " " + s.btn : s.btn}
            onClick={() => setSelect({ ...initialState, script: true })}
          >
            Скрипт
          </button>
          <button
            className={select.rules ? s.activBtn + " " + s.btn : s.btn}
            onClick={() => setSelect({ ...initialState, rules: true })}
          >
            Правила
          </button>
          <button
            className={select.content ? s.activBtn + " " + s.btn : s.btn}
            onClick={() => setSelect({ ...initialState, content: true })}
          >
            Контент
          </button>
          <button
            className={select.map ? s.activBtn + " " + s.btn : s.btn}
            onClick={() => setSelect({ ...initialState, map: true })}
          >
            Карта
          </button>
        </div>

        <div className={s.content}>
          {select.table && <ModalTables />}
          {select.desc && <ModalDesc />}
          {select.script && <ModalScript />}
          {select.rules && <ModalRules />}
          {select.content && <ModalContent />}
          {select.map && <ModalMap />}
        </div>
      </div>
    </>
  );
};

export default ModalWatch;
