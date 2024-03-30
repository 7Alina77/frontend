import React, { FC } from 'react';
import styles from './Services.module.css';

const Services: FC = (): React.ReactElement => {
  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <div className={styles.columns}>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Обновить данные сотрудников</h3>
            <p className={styles.columnText}>Из открытых источников, сразу для вас</p>
          </div>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Хранить документы в удобном формате</h3>
            <p className={styles.columnText}>Можно скачать и увидеть в личном кабинете</p>
          </div>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Поможем узнать самое главное</h3>
            <p className={styles.columnText}>Действительность документов</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services;
