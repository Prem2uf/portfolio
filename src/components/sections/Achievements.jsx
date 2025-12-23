import React from 'react';
import styles from './Achievements.module.css';
import { achievements } from '../../utils/data';

function Achievements() {
  const getIcon = (iconName) => {
    const icons = {
      'TrendingUp': '📈',
      'Lock': '🔒',
      'Cloud': '☁️',
      'Sparkles': '✨'
    };
    return icons[iconName] || '🏆';
  };

  return (
    <div className={styles.achievements}>
      <div className={styles.header}>
        <h2 className={styles.title}>Key Achievements</h2>
        <div className={styles.line}></div>
      </div>

      <div className={styles.grid}>
        {achievements.map((achievement, idx) => (
          <div key={idx} className={styles.card}>
            <div className={styles.iconBox}>
              <span className={styles.icon}>{getIcon(achievement.icon)}</span>
            </div>
            <div className={styles.textContent}>
              <p className={styles.text}>{achievement.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Achievements;