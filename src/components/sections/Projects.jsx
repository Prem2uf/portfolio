import React from 'react';
import styles from './Projects.module.css';
import { projects } from '../../utils/data';

function Projects() {
  return (
    <div className={styles.projects}>
      <div className={styles.header}>
        <h2 className={styles.title}>Featured Work</h2>
        <div className={styles.line}></div>
      </div>

      <div className={styles.grid}>
        {projects.map((project, idx) => (
          <div key={idx} className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.textContent}>
                <div className={styles.nameWrapper}>
                  <h3 className={`${styles.projectName} ${styles[`gradient${idx}`]}`}>
                    {project.name}
                  </h3>
                  {project.link && (
                    <a href={`https://${project.link}`} className={styles.link} target="_blank" rel="noopener noreferrer">
                      🔗
                    </a>
                  )}
                </div>
                <p className={styles.subtitle}>{project.subtitle}</p>
                <p className={styles.tech}>{project.tech}</p>
              </div>
              <div className={styles.iconWrapper}>
                💼
              </div>
            </div>
            <div className={styles.highlights}>
              {project.highlights.map((highlight, i) => (
                <div key={i} className={styles.highlightItem}>
                  <span className={styles.arrow}>→</span>
                  <span className={styles.highlightText}>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;