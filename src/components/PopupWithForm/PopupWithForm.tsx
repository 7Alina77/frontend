import React, { FC, ReactNode } from 'react';
// import { Link } from 'react-router-dom';
import './PopupWithForm.scss';
import styles from './PopupWithForm.module.css';

interface PopupWithFormProps {
  title: string;
  name: string;
  buttonText: string;
  children: ReactNode;
  onClose: () => void;
  onSubmit: () => void;
  isFormValid: boolean;
  isPopupOpened: boolean;
}

const PopupWithForm: FC<PopupWithFormProps> = ({
  title,
  name,
  buttonText,
  children,
  onClose,
  onSubmit,
  isFormValid,
  isPopupOpened,
}): React.ReactElement => {
  document.addEventListener('keydown', closeByEscape);
  document.addEventListener('mouseup', handeMouseClosePopup);

  function closeByEscape(evt: { key: string }) {
    if (evt.key === 'Escape') {
      onClose();
    }
  }

  function handeMouseClosePopup(event: MouseEvent) {
    if (event.target === document.querySelector('.PopupWithForm_popup__fN2Jq')) {
      onClose();
    }
  }

  const handleSignUp = () => {
    onClose();
    // надо открыть signUp popup
  };

  return (
    <section className={`${styles.popup} ${isPopupOpened ? styles.popupOpened : ''}`}>
      {/* <div className={styles.container}> */}
      <button className={styles.closeButton} type="button" onClick={onClose}>
        {}
      </button>
      <form className={styles.form} noValidate onSubmit={onSubmit}>
        <button className={styles.closeButton} type="button" onClick={onClose}>
          {}
        </button>
        <h2 className={styles.title}>{title}</h2>
        {children}
        <button type="submit" className={styles.saveButton} disabled={!isFormValid}>
          {buttonText}
        </button>
      </form>
      {name === 'signIn' && (
        <div className={styles.regSugestion}>
          Ещё нет аккаунта?
          <button type="button" className="popup__link" onClick={handleSignUp}>
            Зарегистрируйтесь
          </button>
        </div>
      )}
      {/* </div> */}
    </section>
  );
};

export default PopupWithForm;
