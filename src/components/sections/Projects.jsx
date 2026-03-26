import React, { memo } from 'react';
import styles from './Projects.module.css';
import { projects } from '../../utils/data';

const projectColors = ['#6c63ff', '#a78bfa', '#f472b6', '#34d399'];

const Projects = memo(function Projects() {
  return (
    <div className={styles.projects}>
      <div className={styles.header}>
        <span className={styles.sectionTag}>Portfolio</span>
        <h2 className={styles.title}>Featured Projects</h2>
      </div>

      <div className={styles.grid}>
        {projects.map((project, idx) => (
          <div 
            key={idx} 
            className={styles.card}
            style={{ '--project-color': projectColors[idx % projectColors.length] }}
          >
            {/* Card Header */}
            <div className={styles.cardTop}>
              <div className={styles.cardMeta}>
                <span className={styles.projectIndex}>0{idx + 1}</span>
                <h3 className={styles.projectName}>{project.name}</h3>
              </div>
              {project.link && (
                <a 
                  href={`https://${project.link}`} 
                  className={styles.projectLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.name}`}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </a>
              )}
            </div>

            <p className={styles.subtitle}>{project.subtitle}</p>
            
            {/* Tech Stack */}
            <div className={styles.techRow}>
              {project.tech.split(' • ').map((tech, i) => (
                <span key={i} className={styles.techBadge}>{tech}</span>
              ))}
            </div>

            {/* Highlights */}
            <div className={styles.highlights}>
              {project.highlights.map((highlight, i) => (
                <div key={i} className={styles.highlightItem}>
                  <span className={styles.bullet}></span>
                  <span className={styles.highlightText}>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Projects;