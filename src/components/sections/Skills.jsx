import React, { memo } from 'react';
import styles from './Skills.module.css';
import { skills } from '../../utils/data';

/* ── Inline SVG icons keyed by icon name ── */
const Icon = ({ name, size = 20 }) => {
  const p = { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round', width: size, height: size };
  switch (name) {
    case 'server':     return <svg {...p}><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>;
    case 'code':       return <svg {...p}><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>;
    case 'database':   return <svg {...p}><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>;
    case 'layers':     return <svg {...p}><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>;
    case 'shield':     return <svg {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
    case 'cloud':      return <svg {...p}><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>;
    case 'creditCard': return <svg {...p}><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>;
    case 'plug':       return <svg {...p}><path d="M18 6L6 18"/><path d="M7 6h11v11"/></svg>;
    case 'shoppingCart': return <svg {...p}><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>;
    case 'package':    return <svg {...p}><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>;
    case 'clipboardList': return <svg {...p}><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="13" y2="16"/></svg>;
    case 'zap':        return <svg {...p}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
    default:           return <svg {...p}><circle cx="12" cy="12" r="10"/></svg>;
  }
};

const Skills = memo(function Skills() {
  return (
    <div className={styles.skills}>
      <div className={styles.header}>
        <span className={styles.sectionTag}>Technical Skills</span>
        <h2 className={styles.title}>My Tech Stack</h2>
        <p className={styles.sub}>
          Expertise across backend architecture, cloud, payments, and enterprise B2B commerce.
        </p>
      </div>

      <div className={styles.grid}>
        {Object.entries(skills).map(([key, data]) => (
          <div
            key={key}
            className={styles.card}
            style={{ '--skill-color': data.color }}
          >
            <div className={styles.cardTop}>
              <div className={styles.iconBox}>
                <Icon name={data.icon} size={18} />
              </div>
              <h3 className={styles.catLabel}>{data.label}</h3>
            </div>
            <div className={styles.tagList}>
              {data.items.map((item, i) => (
                <span key={i} className={styles.tag}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Skills;