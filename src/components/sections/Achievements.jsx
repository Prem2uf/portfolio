import React, { memo } from 'react';
import styles from './Achievements.module.css';
import { achievements } from '../../utils/data';

const achievementIcons = {
  TrendingUp: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
    </svg>
  ),
  Lock: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  Cloud: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
    </svg>
  ),
  Sparkles: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  ),
};

const achievementColors = ['#6c63ff', '#34d399', '#22d3ee', '#fbbf24'];

const Achievements = memo(function Achievements() {
  return (
    <div className={styles.achievements}>
      <div className={styles.header}>
        <span className={styles.sectionTag}>Milestones</span>
        <h2 className={styles.title}>Key Achievements</h2>
      </div>

      <div className={styles.grid}>
        {achievements.map((achievement, idx) => (
          <div 
            key={idx} 
            className={styles.card}
            style={{ '--achievement-color': achievementColors[idx % achievementColors.length] }}
          >
            <div className={styles.iconBox}>
              {achievementIcons[achievement.icon] || achievementIcons.Sparkles}
            </div>
            <p className={styles.text}>{achievement.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Achievements;