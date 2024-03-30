import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import stylesLink from '../../pages/MainPage/MainPage.module.css';

const Footer: FC = (): React.ReactElement => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <nav className={styles.navigation}>
          <ul className={styles.links}>
            <li className={styles.link}>
              <Link to="/#" className={`${styles.linkTerms} ${stylesLink.link}`}>
                Условия пользования сервисом
              </Link>
            </li>
            <li className={styles.link}>
              <Link to="/#" className={`${styles.linkTerms} ${stylesLink.link}`}>
                Политика конфиденциальности
              </Link>
            </li>
          </ul>
          <ul className={styles.links}>
            <li className={styles.link}>
              <a className={`${styles.linkMail} ${stylesLink.link}`} href="mailto:monitoringofindividuals@gmail.com">monitoringofindividuals@gmail.com</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
};

export default Footer;
