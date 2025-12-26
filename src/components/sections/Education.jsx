import React, { memo } from 'react';
import styles from './Education.module.css';
import { education } from '../../utils/data';

const Education = memo(function Education() {
  return (
    <div className={styles.education}>
      <div className={styles.header}>
        <h2 className={styles.title}>Education</h2>
        <div className={styles.line}></div>
      </div>

      <div className={styles.grid}>
        {education.map((edu, idx) => (
          <div key={idx} className={styles.card}>
            <div className={styles.iconBox}>
              <span className={styles.icon}>🎓</span>
            </div>
            <div className={styles.content}>
              <h3 className={styles.degree}>{edu.degree}</h3>
              <p className={styles.school}>{edu.school}</p>
              <div className={styles.details}>
                <span className={styles.years}>{edu.years}</span>
                <span className={styles.grade}>{edu.grade}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Education;