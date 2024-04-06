import React, { FC, useRef } from 'react';
import JsPdf from 'jspdf';
import html2canvas from 'html2canvas';
import styles from './Report.module.css';
import '../../components/Page/page.css';

const Report: FC = (): React.ReactElement => {
  const pdfRef = useRef(null);

  const handleDownloadPDF = () => {
    const input = pdfRef.current;
    if (input) {
      html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new JsPdf('p', 'mm', 'a4', true);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
        const imgX = (pdfWidth - imgWidth * ratio) / 2;
        const imgY = 30;
        pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
        pdf.save('report.pdf');
      });
    }
  };

  return (
    <section className={styles.report}>
      <div className={styles.container} ref={pdfRef}>
        <div className={styles.section}>
          <h2 className={styles.title}>Данные проверяемого</h2>
          <div className={styles.subsection}>
            <h3 className={styles.subtitle}>Петров Василий Иванович</h3>
            <ul className={styles.info}>
              <li className={styles.text}>Дата рождения</li>
              <li className={styles.data}>12.01.1974</li>
            </ul>
            <ul className={styles.info}>
              <li className={styles.text}>Возраст</li>
              <li className={styles.data}>50 лет</li>
            </ul>
            <ul className={styles.info}>
              <li className={styles.text}>Паспорт</li>
              <li className={styles.data}>7684 896330</li>
            </ul>
            <ul className={styles.info}>
              <li className={styles.text}>Водительское удостоверение</li>
              <li className={styles.data}>63 93 970976</li>
            </ul>
            <ul className={styles.info}>
              <li className={styles.text}>Дата выдачи водительского удостоверения</li>
              <li className={styles.data}>11.09.2015</li>
            </ul>
          </div>
        </div>
        <div className={styles.sectionCheck}>
          <h2 className={styles.title}>Результат проверки</h2>
          <div className={styles.subsection}>
            <h3 className={styles.subtitleAttention}>
              Обратите внимание <span className={styles.span} />
            </h3>
            <ul className={styles.attention}>
              <li className={styles.text}>Исполнительное производство</li>
              <li className={styles.infoDataRisk}>Найдено</li>
            </ul>
            <h3 className={styles.subtitleAttention}>
              Рисков не выявлено <span className={styles.spanOk} />
            </h3>
            <ul className={styles.infoRisk}>
              <li className={styles.infoTextRisk}>Паспорт</li>
              <li className={styles.infoDataRisk}>Действителен</li>
            </ul>
            <ul className={styles.infoRisk}>
              <li className={styles.infoTextRisk}>ИНН</li>
              <li className={styles.infoDataRisk}>648394753974</li>
            </ul>
            <ul className={styles.infoRisk}>
              <li className={styles.infoTextRisk}>Самозанятость</li>
              <li className={styles.infoDataRisk}>Найдено</li>
            </ul>
            <ul className={styles.infoRisk}>
              <li className={styles.infoTextRisk}>Банкротство</li>
              <li className={styles.infoDataRisk}>Не найдено</li>
            </ul>
            <ul className={styles.infoRisk}>
              <li className={styles.infoTextRisk}>Штрафы ГИБДД</li>
              <li className={styles.infoDataRisk}>Не найдено</li>
            </ul>
            <ul className={styles.infoRisk}>
              <li className={styles.infoTextRisk}>Террористы и экстремисты</li>
              <li className={styles.infoDataRisk}>Не найдено</li>
            </ul>
          </div>
        </div>
      </div>
      <button type="submit" className={styles.btnNew}>
        Новый отчет
      </button>
      <div className={styles.sendContainer}>
        <form className={styles.form}>
          <fieldset className={styles.fieldset}>
            <label className={styles.label} htmlFor="email">
              Введите электронную почту
            </label>
            <input className={styles.input} type="email" name="mail" id="email" required />
          </fieldset>
          <button className={styles.btnForm} type="submit" >Отправить на почту</button>
        </form>
        <button className={styles.btnPdf} type="submit" onClick={handleDownloadPDF}>
          Скачать PDF
        </button>
      </div>
    </section>
  );
};

export default Report;
