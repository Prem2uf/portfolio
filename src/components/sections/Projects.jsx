import React, { memo } from 'react';
import styles from './Projects.module.css';
import { projects } from '../../utils/data';

/* ── Icon map ── */
const Icon = ({ name, size = 20 }) => {
  const s = { width: size, height: size };
  const props = { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round', ...s };
  switch (name) {
    case 'server':
      return <svg {...props}><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>;
    case 'layers':
      return <svg {...props}><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>;
    case 'shield':
      return <svg {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
    case 'creditCard':
      return <svg {...props}><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>;
    case 'cloud':
      return <svg {...props}><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>;
    case 'shoppingCart':
      return <svg {...props}><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>;
    case 'package':
      return <svg {...props}><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>;
    case 'clipboardList':
      return <svg {...props}><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="13" y2="16"/></svg>;
    default:
      return <svg {...props}><circle cx="12" cy="12" r="10"/></svg>;
  }
};

const Projects = memo(function Projects() {
  const project = projects[0];

  return (
    <div className={styles.projects}>
      <div className={styles.header}>
        <span className={styles.sectionTag}>Featured Project</span>
        <h2 className={styles.title}>My Flagship Work</h2>
        <p className={styles.subtitle}>
          A large-scale, AI-powered enterprise SaaS platform built from the ground up.
        </p>
      </div>

      {/* ── Hero Banner ── */}
      <div className={styles.heroBanner}>
        <div className={styles.bannerBg}></div>
        <div className={styles.bannerContent}>
          <div className={styles.bannerLeft}>
            <div className={styles.foundingBadge}>
              <span className={styles.foundingDot}></span>
              Founding Backend Developer · First Engineer on the Project
            </div>
            <h3 className={styles.projectName}>{project.name}</h3>
            <p className={styles.projectCompany}>{project.company}</p>
            <p className={styles.projectTagline}>{project.tagline}</p>
            <p className={styles.projectRole}>{project.role}</p>
            <p className={styles.projectSummary}>{project.summary}</p>

            <div className={styles.techRow}>
              {project.tech.map(t => (
                <span key={t} className={styles.techBadge}>{t}</span>
              ))}
            </div>

            {project.link && (
              <a
                href={`https://${project.link}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.visitLink}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                {project.link}
              </a>
            )}
          </div>

          <div className={styles.bannerRight}>
            <div className={styles.statCard}>
              <span className={styles.statVal}>{project.stat1Value}</span>
              <span className={styles.statLbl}>{project.stat1Label}</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statVal}>{project.stat2Value}</span>
              <span className={styles.statLbl}>{project.stat2Label}</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statVal}>{project.stat3Value}</span>
              <span className={styles.statLbl}>{project.stat3Label}</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Category Grid ── */}
      <div className={styles.categoryGrid}>
        {project.categories.map((cat, idx) => (
          <div
            key={idx}
            className={styles.catCard}
            style={{ '--cat-color': cat.color }}
          >
            <div className={styles.catHeader}>
              <div className={styles.catIcon}>
                <Icon name={cat.icon} size={18} />
              </div>
              <h4 className={styles.catTitle}>{cat.title}</h4>
            </div>
            <ul className={styles.catPoints}>
              {cat.points.map((p, i) => (
                <li key={i} className={styles.catPoint}>
                  <span className={styles.catBullet}></span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Projects;