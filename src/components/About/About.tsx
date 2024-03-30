import React, { FC } from 'react';
import styles from './About.module.css';
import manager from '../../images/manager.svg';
import car from '../../images/car.svg';
import laptop from '../../images/laptop.svg';

const About: FC = (): React.ReactElement => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.title}>Кого можно проверить</h2>
        <div className={styles.columns}>
          <div className={styles.column}>
            <div className={styles.columnContainer}>
              <div className={styles.imageBackground}>
                <div className={styles.imageContainer}>
                  <img src={manager} alt="logo" className={styles.imageImg} />
                </div>
              </div>
              <h3 className={styles.columnTitle}>Сотрудника</h3>
              <p className={styles.columnText}>Подтверждение документов, наличие действующих исполнительных делопроизводств</p>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.columnContainer}>
              <div className={styles.imageBackground}>
                <div className={styles.imageContainer}>
                  <img src={car} alt="logo" className={styles.imageImg} />
                </div>
              </div>
              <h3 className={styles.columnTitle}>Водителя</h3>
              <p className={styles.columnText}>Действительность водительских прав, стаж вождения, страховые случаи, аварии</p>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.columnContainer}>
              <div className={styles.imageBackground}>
                <div className={styles.imageContainer}>
                  <img src={laptop} alt="logo" className={styles.imageImg} />
                </div>
              </div>
              <h3 className={styles.columnTitle}>Самозанятого</h3>
              <p className={styles.columnText}>Наличие официального статуса, исполнительных делопроизводств, судимостей</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
