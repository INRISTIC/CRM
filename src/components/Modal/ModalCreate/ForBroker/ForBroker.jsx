import { useDispatch, useSelector } from "react-redux";

import { forBrokerChange, forBrokerCheckbox } from "../../../../store/slices/formInfo";

import s from "./ForBroker.module.css";

const ForBroker = () => {
  const forBroker = useSelector((store) => store.formInfo.forBroker);
  console.log(forBroker)
  const dispatch = useDispatch();
  const handleChange = (e, type) => {
    dispatch(forBrokerChange({ value: e.target.value, inpt: type }));
  };
  return (
    <>
      <div className={s.high}>
        <div className={s.header}>Аппартаменты</div>
        <div className={s.btnsBlock}>
          <button className={forBroker.appartament ? s.btn + ' ' + s.btnActive : s.btn} onClick={() => dispatch(forBrokerCheckbox({ type: "appartament", status: true }))}>Да</button>
          <button className={!forBroker.appartament ? s.btn + ' ' + s.btnActive : s.btn} onClick={() => dispatch(forBrokerCheckbox({ type: "appartament", status: false }))}>Нет</button>
        </div>
      </div>
      <div className={s.main}>
        <textarea placeholder="Описание" value={forBroker.description} onChange={(e) => handleChange(e, "description")}>

        </textarea>
        <textarea placeholder="Скрипт" value={forBroker.script} onChange={(e) => handleChange(e, "script")}>

        </textarea>
        <textarea placeholder="Правила" value={forBroker.rules} onChange={(e) => handleChange(e, "rules")}>

        </textarea>
      </div>
      <button className={s.saveBtn}>Сохранить</button>
    </>
  );
};

export default ForBroker;
