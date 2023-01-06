import s from "./ModalContent.module.css";

const ModalContent = () => {
  return (
    <>
      <div className={s.block}>
        <div className={s.header}>Сайт</div>
        <div className={s.main}>figma.com/file/Hp7EviJ5VtjPFAVMgUknmF/</div>
      </div>
      <button className={s.btn}>Скачать презентацию</button>
    </>
  );
};

export default ModalContent;
