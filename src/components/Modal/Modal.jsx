import { useSelector, useDispatch } from 'react-redux';
import { modalCreateSelect, modalWatchSelect, closeModal } from '../../store/slices/modal';

import ModalCreate from './ModalCreate/ModalCreate';
import ModalWatch from './ModalWatch/ModalWatch';

import s from './Modal.module.css';

const Modal = ({active, setActive}) => {

  const modalStatus = useSelector(store => store.modal)
  const dispatch = useDispatch()

  return (
    <div className={(modalStatus.modalCreate || modalStatus.modalWatch) ? s.modal + ' ' + s.active : s.modal} onClick={() => dispatch(closeModal())}>
      <div className={modalStatus.modalCreate ? s.contentCreate : s.contentWatch} onClick={e => e.stopPropagation()}>
        {modalStatus.modalCreate && <ModalCreate />}
        {modalStatus.modalWatch && <ModalWatch />}
      </div>
    </div>
  )
}

export default Modal;