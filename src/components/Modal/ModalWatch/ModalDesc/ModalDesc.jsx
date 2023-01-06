import s from "./ModalDesc.module.css";

const ModalDesc = () => {
  return (
    <div className={s.info}>
      <div className={s.FirstColumnBlock}>
        <div className={s.block}>
          <div className={s.blockHeader}>Номер телефона</div>
          <div className={s.blockContent}>+7-999-999-99-99</div>
        </div>
        <div className={s.block}>
          <div className={s.blockHeader}>Город</div>
          <div className={s.blockContent}>Москва</div>
        </div>
        <div className={s.block}>
          <div className={s.blockHeader}>Режим в будни</div>
          <div className={s.blockContent}>10:00 - 22:00</div>
        </div>
        <div className={s.block}>
          <div className={s.blockHeader}>Аппартоменты</div>
          <div className={s.blockContent}>Да</div>
        </div>
      </div>
      <div className={s.SecondColumnBlock}>
        <div className={s.block}>
          <div className={s.blockHeader}>Короткий номер</div>
          <div className={s.blockContent}>999-99-99</div>
        </div>
        <div className={s.block}>
          <div className={s.blockHeader}>Локация</div>
          <div className={s.blockContent}>Москва Сити</div>
        </div>
        <div className={s.block}>
          <div className={s.blockHeader}>Режим в выходные</div>
          <div className={s.blockContent}>10:00 - 20:00</div>
        </div>
        <div className={s.block}>
          <div className={s.blockHeader}>Прибыль</div>
          <div className={s.blockContent}>3 000 000 руб.</div>
        </div>
      </div>
      <div className={s.text}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia illo tempore velit ex molestias omnis aperiam molestiae debitis! Quis modi libero consequatur minima aut repellat quisquam enim dolores eius nesciunt!
      </div>
    </div>
  );
};

export default ModalDesc;
