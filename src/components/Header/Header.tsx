import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '../../images/logo.svg';
import userIcon from '../../images/userIcon.svg';
import { RootState } from '../../services/actions/types';
import styles from './Header.module.css';
import stylesLink from '../../pages/MainPage/MainPage.module.css';

interface HeaderProps {
  isSignUpPopupOpened: () => void;
  isSignInPopupOpened: () => void;
}

const Header: FC<HeaderProps> = ({
  isSignUpPopupOpened,
  isSignInPopupOpened,
}): React.ReactElement => {
  // TODO
  const currentUser: any = useSelector((state: RootState) => state.currentUser);
  // const navigate = useNavigate();

  const openSignUpPopup = () => {
    isSignUpPopupOpened();
  };

  const openSignInPopup = () => {
    isSignInPopupOpened();
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.linkToMain}>
          <div className={styles.logo}>
            <img src={logo} alt="logo" className={styles.logoImg} />
          </div>
          <p className={`${styles.monitoring} ${stylesLink.link}`}>Мониторинг физических лиц</p>
        </Link>
        {currentUser.isLoggedIn === false ? (
          <nav className={styles.nav}>
            <ul className={styles.auth}>
              <li className={`${styles.authItem} ${stylesLink.link}`}>
                <button
                  type="button"
                  className={`${styles.button} ${stylesLink.link}`}
                  onClick={openSignUpPopup}
                >
                  Регистрация
                </button>
              </li>
              <li className={`${styles.authItem} ${stylesLink.link}`}>
                <button
                  type="button"
                  className={`${styles.button} ${stylesLink.link}`}
                  onClick={openSignInPopup}
                >
                  Вход
                </button>
              </li>
            </ul>
          </nav>
        ) : (
          <div className={`${styles.userContainer} ${stylesLink.link}`}>
            <p className={styles.userInfo}>
              {currentUser.firstName} {currentUser.lastName}
            </p>
            <div className={styles.userLogo}>
              <img src={userIcon} alt="user-logo" className={styles.userLogoImg} />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
