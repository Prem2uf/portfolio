import React, { useState } from 'react';
import styles from './Hero.module.css';
import { profileData } from '../../utils/data';
// Import your profile image
import profileImage from '../../assets/images/profile.png';

function Hero() {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Profile Image */}
          <div className={styles.profileWrapper}>
            <div className={styles.glowRing}></div>
            <div className={styles.profileImage}>
              <div className={styles.profileContent}>
                {!imageError ? (
                  <>
                    <img 
                      src={profileImage} 
                      alt="Premchandra Yadav" 
                      className={styles.profileImg}
                      onError={handleImageError}
                    />
                    {/* Decorative overlay to add visual interest and draw focus to center */}
                    <div className={styles.imageOverlay}></div>
                    {/* Decorative frame elements for hand area */}
                    <div className={styles.decorativeFrame}>
                      <div className={styles.frameLine1}></div>
                      <div className={styles.frameLine2}></div>
                      <div className={styles.frameAccent}></div>
                    </div>
                  </>
                ) : (
                  <span className={styles.initials}>PY</span>
                )}
              </div>
            </div>
            <div className={styles.codeIcon}>
              &lt;/&gt;
            </div>
          </div>

          {/* Hero Content */}
          <div className={styles.textContent}>
            <div className={styles.badge}>
              🚀 Available for Hire
            </div>
            
            <h1 className={styles.title}>
              Hi, I'm Prem
            </h1>
            
            <h2 className={styles.subtitle}>
              Full-Stack Developer
            </h2>
            
            <p className={styles.description}>
              Crafting powerful <span className={styles.highlight1}>SaaS platforms</span> and 
              <span className={styles.highlight2}> scalable applications</span> with 
              Laravel & React. Specialized in multi-tenant architectures and enterprise solutions.
            </p>

            {/* Stats */}
            <div className={styles.stats}>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>2.5+</div>
                <div className={styles.statLabel}>Years Exp</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>600+</div>
                <div className={styles.statLabel}>APIs Built</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>5+</div>
                <div className={styles.statLabel}>Projects</div>
              </div>
            </div>

            {/* Contact Buttons */}
            <div className={styles.buttons}>
              <a 
                href={profileData.resume} 
                download="Premchandra_Yadav_Resume.pdf"
                className={styles.resumeBtn}
              >
                📄 Download Resume
              </a>
              <a href={`mailto:${profileData.email}`} className={styles.primaryBtn}>
                ✉️ Email Me
              </a>
              <a href={`tel:${profileData.phone}`} className={styles.secondaryBtn}>
                📞 Call Now
              </a>
            </div>

            {/* Social Links */}
            <div className={styles.social}>
              <a href={profileData.linkedin} className={styles.socialBtn}>in</a>
              <a href={profileData.github} className={styles.socialBtn}>gh</a>
              <a href={profileData.hackerrank} className={styles.socialBtn}>&lt;/&gt;</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;