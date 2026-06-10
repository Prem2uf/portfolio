import React, { useState, useEffect, useRef, memo } from 'react';
import styles from './Hero.module.css';
import { profileData } from '../../utils/data';
import profileImage from '../../assets/images/profile.png';

const ROLES = [
  'Full-Stack Developer',
  'Laravel Expert',
  'React Specialist',
  'SaaS Architect',
  'API Engineer',
];

function useTypingEffect(words, typingSpeed = 80, deletingSpeed = 45, pauseMs = 1800) {
  const [displayed, setDisplayed] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [phase, setPhase] = useState('typing'); // 'typing' | 'pause' | 'deleting'
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const current = words[wordIdx];
    let timer;

    if (phase === 'typing') {
      if (charIdx < current.length) {
        timer = setTimeout(() => {
          setDisplayed(current.slice(0, charIdx + 1));
          setCharIdx(c => c + 1);
        }, typingSpeed);
      } else {
        timer = setTimeout(() => setPhase('pause'), pauseMs);
      }
    } else if (phase === 'pause') {
      timer = setTimeout(() => setPhase('deleting'), 200);
    } else if (phase === 'deleting') {
      if (charIdx > 0) {
        timer = setTimeout(() => {
          setDisplayed(current.slice(0, charIdx - 1));
          setCharIdx(c => c - 1);
        }, deletingSpeed);
      } else {
        setWordIdx(i => (i + 1) % words.length);
        setPhase('typing');
      }
    }

    return () => clearTimeout(timer);
  }, [phase, charIdx, wordIdx, words, typingSpeed, deletingSpeed, pauseMs]);

  return displayed;
}

const Hero = memo(function Hero() {
  const [imageError, setImageError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);
  const typedRole = useTypingEffect(ROLES);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const techBadges = ['Laravel', 'React', 'AWS', 'MySQL', 'REST APIs', 'Redis'];

  return (
    <section
      className={`${styles.hero} ${isVisible ? styles.visible : ''}`}
      ref={heroRef}
      itemScope
      itemType="https://schema.org/Person"
      id="home"
    >
      {/* Decorative Background Elements */}
      <div className={styles.heroBg} aria-hidden="true">
        <div className={styles.bgOrb1}></div>
        <div className={styles.bgOrb2}></div>
        <div className={styles.bgOrb3}></div>
        <div className={styles.bgGrid}></div>
        <div className={styles.bgLines}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>

          {/* ── LEFT COLUMN ── */}
          <div className={styles.leftCol}>

            {/* Status / availability badge */}
            <div className={styles.availabilityBadge}>
              <span className={styles.availDot}></span>
              <span>Open to opportunities · Founding Dev @ Buyience</span>
              <span className={styles.availArrow}>→</span>
            </div>

            {/* Greeting */}
            <div className={styles.greeting}>
              <span className={styles.wave}>👋</span>
              <span className={styles.greetTag}>Hello World, I'm</span>
            </div>

            {/* Main Name */}
            <h1 className={styles.name} itemProp="name">
              <span className={styles.nameFirst}>Premchandra</span>
              <span className={styles.nameLast}>Yadav</span>
            </h1>

            {/* Animated Role */}
            <div className={styles.roleRow}>
              <span className={styles.rolePrefix}>I'm a </span>
              <span className={styles.roleTyped}>{typedRole}</span>
              <span className={styles.cursor}></span>
            </div>

            {/* Short Bio */}
            <p className={styles.bio} itemProp="description">
              Building enterprise-grade{' '}
              <span className={styles.bioHighlight}>SaaS platforms</span> &amp;{' '}
              <span className={styles.bioHighlight}>scalable applications</span> with
              Laravel &amp; React. Specialized in multi-tenant architectures, REST APIs,
              and AWS cloud infrastructure.
            </p>

            {/* Tech stack badges */}
            <div className={styles.techBadges}>
              {techBadges.map(t => (
                <span key={t} className={styles.techBadge}>{t}</span>
              ))}
            </div>

            {/* Org Info */}
            <div className={styles.orgInfo}>
              <div className={styles.orgDot}></div>
              <span className={styles.orgText}>
                Currently{' '}
                <strong className={styles.orgName}>{profileData.organizationRole}</strong>
                {' '}@{' '}
                <strong className={styles.orgName}>{profileData.organization}</strong>
              </span>
              <span className={styles.orgPill}>since {profileData.organizationSince}</span>
            </div>

            {/* CTA Buttons */}
            <div className={styles.ctaRow}>
              <a
                href={profileData.resume}
                download="Premchandra_Yadav_Resume.pdf"
                className={styles.btnPrimary}
                id="hero-resume-btn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download Resume
              </a>
              <a
                href={`mailto:${profileData.email}`}
                className={styles.btnSecondary}
                id="hero-email-btn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                Let's Talk
              </a>
            </div>

            {/* Social Links */}
            <div className={styles.socialRow}>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="LinkedIn"
                id="hero-linkedin"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="GitHub"
                id="hero-github"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
              <a
                href={profileData.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Instagram"
                id="hero-instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
                Instagram
              </a>
              <a
                href={`tel:${profileData.phone}`}
                className={styles.socialLink}
                aria-label="Phone"
                id="hero-phone"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.11 12 19.79 19.79 0 0 1 1.04 3.38 2 2 0 0 1 3 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                Call
              </a>
            </div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className={styles.rightCol}>
            {/* Profile Image Card */}
            <div className={styles.profileCard}>
              {/* Decorative accent lines */}
              <div className={styles.accentLine1}></div>
              <div className={styles.accentLine2}></div>
              
              {/* Free-standing Cutout Image */}
              <div className={styles.imageFrame}>
                <div className={styles.imageBackdrop}></div>
                {!imageError ? (
                  <img
                    src={profileImage}
                    alt="Premchandra Yadav - Full-Stack Developer, Software Engineer from Noida, India"
                    className={styles.profileImg}
                    itemProp="image"
                    loading="eager"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <span className={styles.initials}>Premchandra</span>
                )}
              </div>

              {/* Floating stat cards */}
              <div className={`${styles.floatCard} ${styles.floatCardTop}`} id="hero-stat-years">
                <div className={styles.floatIcon}>⚡</div>
                <div className={styles.floatInfo}>
                  <span className={styles.floatNum}>~3</span>
                  <span className={styles.floatLabel}>Years Exp.</span>
                </div>
              </div>

              <div className={`${styles.floatCard} ${styles.floatCardBottom}`} id="hero-stat-apis">
                <div className={styles.floatIcon}>🚀</div>
                <div className={styles.floatInfo}>
                  <span className={styles.floatNum}>1500+</span>
                  <span className={styles.floatLabel}>APIs Built</span>
                </div>
              </div>

              {/* Status badge on image */}
              <div className={styles.statusBadge}>
                <span className={styles.statusDot}></span>
                <span>Available</span>
              </div>
            </div>

            {/* Mobile-only stat row (replaces floating cards on small screens) */}
            <div className={styles.mobileStats}>
              <div className={styles.mobileStat}>
                <span className={styles.mobileStatNum}>~3</span>
                <span className={styles.mobileStatLabel}>Years Exp.</span>
              </div>
              <div className={styles.mobileStatDivider}></div>
              <div className={styles.mobileStat}>
                <span className={styles.mobileStatNum}>1500+</span>
                <span className={styles.mobileStatLabel}>APIs Built</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <div className={styles.scrollHint}>
          <span className={styles.scrollText}>Scroll to explore</span>
          <div className={styles.scrollMouse}>
            <div className={styles.scrollWheel}></div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Hero;