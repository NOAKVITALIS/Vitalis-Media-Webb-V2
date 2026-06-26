import React from 'react';

export default function VitalisLanding() {
  return (
    <div style={styles.container}>
      <video
        style={styles.video}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/your-video-file-here.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div style={styles.overlay}>
        <div style={styles.logoContainer}>
          <img
            src="/VM_Logo&Ikoner_V2_26"
            alt="Vitalis Media"
            style={styles.logo}
          />
        </div>

        <div style={styles.center}>
          <p style={styles.text}>Full website coming soon</p>
        </div>

        <div style={styles.contactContainer}>
          <a href="https://instagram.com/vitalis.social.media" style={styles.link}>
            @vitalis.social.media
          </a>
          <p style={styles.divider}>·</p>
          <a href="mailto:noak@vitalis.media" style={styles.link}>
            noak@vitalis.media
          </a>
          <p style={styles.divider}>·</p>
          <a href="tel:+46702158908" style={styles.link}>
            +46 70 215 8908
          </a>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
    backgroundColor: '#000',
  },
  video: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '3rem 1.5rem',
    boxSizing: 'border-box',
    zIndex: 10,
    background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.3) 100%)',
  },
  logoContainer: {
    marginTop: '1rem',
  },
  logo: {
    height: '60px',
    width: 'auto',
    filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.4))',
  },
  center: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: '"Stack Sans Notch", sans-serif',
    fontSize: '18px',
    fontWeight: 400,
    color: '#E2BD23',
    margin: 0,
    letterSpacing: '0.02em',
    textShadow: '0 2px 12px rgba(0,0,0,0.6)',
  },
  contactContainer: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    fontFamily: '"Stack Sans Notch", sans-serif',
    fontSize: '13px',
  },
  link: {
    color: '#E2BD23',
    textDecoration: 'none',
    transition: 'opacity 0.2s ease',
    textShadow: '0 2px 8px rgba(0,0,0,0.6)',
  },
  divider: {
    color: '#E2BD23',
    margin: 0,
    opacity: 0.5,
    fontSize: '13px',
    textShadow: '0 2px 8px rgba(0,0,0,0.6)',
  },
};
