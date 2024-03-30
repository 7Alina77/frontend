import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import report from '../../images/reportOnLanding.svg';
import styles from './Landing.module.css';
import stylesLink from '../../pages/MainPage/MainPage.module.css';

const Landing: FC = (): React.ReactElement => {
  const navigate = useNavigate();

  const openSignInPopup = () => {
    navigate('/signin');
  };

  return (
    <section className={styles.landing}>
      <div className={styles.container}>
        <div className={styles.preview}>
          <div className={styles.previewInfo}>
            <h1 className={styles.title}>Быстрая проверка физических лиц</h1>
            <p className={styles.subtitle}>Введите данные для проверки и получите отчет</p>
            <button type='submit' className={`${styles.btn} ${stylesLink.link}`} onClick={openSignInPopup}>Попробовать бесплатно</button>
          </div>
          <div className={styles.previewForm}>
            <div className={styles.formImage}>
              <img src={report} alt='превью формы запроса' className={styles.formImg}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Landing;
