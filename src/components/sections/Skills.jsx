import React, { memo } from 'react';
import styles from './Skills.module.css';
import { skills } from '../../utils/data';

const Skills = memo(function Skills() {
  const getIcon = (iconName) => {
    const icons = {
      'Database': '🗄️',
      'Code': '💻',
      'Cloud': '☁️',
      'Lock': '🔒',
      'CreditCard': '💳'
    };
    return icons[iconName] || '⚡';
  };

  return (
    <div className={styles.skills}>
      <div className={styles.header}>
        <h2 className={styles.title}>Technical Arsenal</h2>
        <div className={styles.line}></div>
      </div>

      <div className={styles.grid}>
        {Object.entries(skills).map(([category, data]) => (
          <div key={category} className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={`${styles.iconBox} ${styles[category]}`}>
                <span className={styles.icon}>{getIcon(data.icon)}</span>
              </div>
              <h3 className={styles.categoryTitle}>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
            </div>
            <div className={styles.skillsList}>
              {data.items.map((skill, idx) => (
                <span key={idx} className={styles.skillTag}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Skills;