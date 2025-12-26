import React, { memo } from 'react';
import styles from './About.module.css';

const About = memo(function About() {
  return (
    <div className={styles.about}>
      <div className={styles.header}>
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.line}></div>
      </div>

      <div className={styles.grid}>
        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <span className={styles.icon}>✨</span>
          </div>
          <h3 className={styles.cardTitle}>Full-Stack Expertise</h3>
          <p className={styles.cardText}>
            Specialized in building robust SaaS systems, multi-tenant applications, and scalable 
            eCommerce platforms with Laravel and React. Expert in creating seamless user experiences 
            backed by powerful backend architectures.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <span className={styles.icon}>⚡</span>
          </div>
          <h3 className={styles.cardTitle}>Performance Focused</h3>
          <p className={styles.cardText}>
            Proven track record of improving system performance by 60% through optimized database 
            operations. Strong expertise in REST APIs, AWS automation, and advanced security 
            implementations including JWT, RBAC, and 2FA.
          </p>
        </div>
      </div>

      <div className={styles.summary}>
        <p className={styles.summaryText}>
          With experience in payment gateway integrations (Stripe, PayPal, Zoho Billing) and 
          cloud infrastructure management, I deliver end-to-end solutions that scale with your business.
        </p>
      </div>
    </div>
  );
});

export default About;