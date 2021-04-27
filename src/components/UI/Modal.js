import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <>
          <div className={styles.backdrop} onClick={props.onClose}></div>
          <div className={styles.modal}>
            <div className={styles.content}>{props.children}</div>
          </div>
        </>,
        document.getElementById('overlays')
      )}
    </>
  );
};

export default Modal;
