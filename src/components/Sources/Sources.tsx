import React, { FC } from 'react';
import styles from './Sources.module.css';
import mvd from '../../images/mvd.svg';
import fns from '../../images/fns.svg';
import fssp from '../../images/fssp.svg';
import gbdd from '../../images/gbdd.svg';
import rosfin from '../../images/rosfin.svg';
import fedres from '../../images/fedres.svg';

const Sources: FC = (): React.ReactElement => {
  return (
    <section className={styles.sources}>
      <div className={styles.container}>
        <h2 className={styles.title}>Источники данных</h2>
        <div className={styles.columnsWrapper}>
          <div className={styles.columns}>
            <div className={styles.column}>
              <div className={styles.imageContainer}>
                <img src={mvd} alt='логотип МВД' className={styles.imageImg}/>
              </div>
              <h3 className={styles.subtitle}>МВД</h3>
            </div>
            <div className={styles.column}>
              <div className={styles.imageContainer}>
                <img src={fns} alt='логотип МВД' className={styles.imageImg}/>
              </div>
              <h3 className={styles.subtitle}>ФНС</h3>
            </div>
            <div className={styles.column}>
              <div className={styles.imageContainer}>
                <img src={fssp} alt='логотип МВД' className={styles.imageImg}/>
              </div>
              <h3 className={styles.subtitle}>ФССП</h3>
            </div>
          </div>
          <div className={styles.columns}>
            <div className={styles.column}>
              <div className={styles.imageContainer}>
                <img src={gbdd} alt='логотип МВД' className={styles.imageImg}/>
              </div>
              <h3 className={styles.subtitle}>ГИБДД</h3>
            </div>
            <div className={styles.column}>
              <div className={styles.imageContainer}>
                <img src={rosfin} alt='логотип МВД' className={styles.imageImg}/>
              </div>
              <h3 className={styles.subtitle}>Росфинмониторинг</h3>
            </div>
            <div className={styles.column}>
              <div className={styles.imageContainer}>
                <img src={fedres} alt='логотип МВД' className={styles.imageImg}/>
              </div>
              <h3 className={styles.subtitle}>Федресурс</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sources;
