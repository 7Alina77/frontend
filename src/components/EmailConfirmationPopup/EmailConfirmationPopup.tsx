import React, { FC } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useForm } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';
// import { loginUser } from '../../utils/Api';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { PATTERN_EMAIL_CONFIRMATION } from '../../utils/constants';

interface SignInPopupProps {
  onClose: () => void;
  isPopupOpened: boolean;
}

const EmailConfirmationPopup: FC<SignInPopupProps> = ({
  onClose,
  isPopupOpened,
}): React.ReactElement => {
  //  const navigate = useNavigate();
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    watch,
  } = useForm({
    mode: 'onChange',
  });

  function handleSubmitForm() {
    if (watch('emailConfirmation') !== '123456') {
      // eslint-disable-next-line no-restricted-syntax
      console.log('неверный код');
      return;
    }
    // eslint-disable-next-line no-restricted-syntax
    console.log('верный код');
    // loginUser(watch('emailConfirmation'))
    //   .then(() => {
    //     navigate('/registereduser');
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
  }

  const emailConfirmationError = errors?.emailConfirmationError?.message?.toString();

  return (
    <PopupWithForm
      title="Введите код"
      name="emailConfirmation"
      buttonText="Подтвердить"
      onClose={onClose}
      onSubmit={handleSubmit(handleSubmitForm)}
      isFormValid={isValid}
      isPopupOpened={isPopupOpened}
    >
      <div className="popup__input-container">
        <label className="popup__custom-input">
          <input
            type="url"
            id="email-confirmation"
            placeholder="Код"
            className="popup__input popup__input_type_email"
            required
            {...register('emailConfirmation', {
              required: 'Введите восьмизначный код',
              maxLength: {
                value: 8,
                message: 'Не более 8 символов',
              },
              minLength: {
                value: 2,
                message: 'Введите восьмизначный код',
              },
              pattern: {
                value: PATTERN_EMAIL_CONFIRMATION,
                message: 'Некорректный код',
              },
            })}
          />
          <span className="authForm__error">{emailConfirmationError}</span>
        </label>
      </div>
    </PopupWithForm>
  );
};

export default EmailConfirmationPopup;
