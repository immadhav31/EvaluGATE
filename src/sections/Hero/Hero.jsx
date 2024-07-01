import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './HeroStyles.module.css';
import heroimg from '../../assets/Eclipse.svg';
import twitter from '../../assets/twitter-light.svg';
import insta from '../../assets/insta-light.svg';
import github from '../../assets/github-light.svg';
import linkedin from '../../assets/linkedin-light.svg';

function Hero() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignupClick = () => {
    navigate('/signup');
  };

  return (
    <section id="hero" className={styles.hero}>
      <header className={styles.header}>
        <a href="#home" className={styles.logoLink}>
          <div className={styles.logo}>EvaluGATE</div>
        </a>
        <nav className={styles.nav}>
          <a href="#home" className={styles.navItem}>Home</a>
          <a href="#about" className={styles.navItem}>About</a>
          <button className={styles.loginButton} onClick={handleLoginClick}>Login</button>
        </nav>
      </header>
      <div className={styles.heroContent}>
        <img src={heroimg} alt="Background" className={styles.backgroundSvg} />
        <div className={styles.textContent}>
          <h1 className={styles.title}>Welcome to EvaluGATE</h1>
          <p className={styles.subtitle}>A platform where you seamlessly take and manage all your academic evaluations!</p>
          <button className={styles.createAccountButton} onClick={handleSignupClick}>Create an account</button>
        </div>
      </div>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.brand}>DeepTeach.AI</div>
          <div className={styles.topics}>
            <div className={styles.topic}>Topic</div>
            <div className={styles.topic}>Page</div>
            <div className={styles.topic}>Page</div>
          </div>
          <div className={styles.topics}>
            <div className={styles.topic}>Topic</div>
            <div className={styles.topic}>Page</div>
            <div className={styles.topic}>Page</div>
          </div>
          <div className={styles.topics}>
            <div className={styles.topic}>Topic</div>
            <div className={styles.topic}>Page</div>
            <div className={styles.topic}>Page</div>
          </div>
        </div>
        <div className={styles.socialLinks}>
          <a href="#" className={styles.socialLink}>
            <img src={twitter} alt="twitter" />
          </a>
          <a href="#" className={styles.socialLink}>
            <img src={insta} alt="insta" />
          </a>
          <a href="#" className={styles.socialLink}>
            <img src={linkedin} alt="linkedin" />
          </a>
          <a href="https://github.com/immadhav31/EvaluGATE" target="_blank" className={styles.socialLink}>
            <img src={github} alt="github" />
          </a>
        </div>
      </footer>
    </section>
  );
}

export default Hero;
