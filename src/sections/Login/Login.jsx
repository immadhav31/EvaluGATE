import React,  { useState } from 'react';
import styles from './LoginStyles.module.css';
import bgImg from '../../assets/Planet-1.svg';
import bgImg2 from '../../assets/Planet.svg';
import bgImg3 from '../../assets/Eclipse.svg';
import googleIcon from '../../assets/google-icon.svg';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/');
  };

  const [activeButton, setActiveButton] = useState('admin');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.background}>
        <img src={bgImg} alt="Background" className={styles.backgroundImg} />
        <img src={bgImg2} alt="Background" className={styles.backgroundImg2} />
        <img src={bgImg3} alt="Background" className={styles.backgroundImg3} />
        <h1 className={styles.welcomeText}>Welcome!</h1>
      </div>
      <div className={styles.formContainer}>
      <button className={styles.header} onClick={handleLoginClick}>DeepTeach.AI</button>
        <div className={styles.formContent}>
        <div className={styles.switchButtons}>
        <button
          className={`${styles.switchButton} ${activeButton === 'admin' ? styles.active : ''}`}
          onClick={() => handleButtonClick('admin')}
        >
          Admin
        </button>
        <button
          className={`${styles.switchButton} ${activeButton === 'student' ? styles.active : ''}`}
          onClick={() => handleButtonClick('student')}
        >
          Student
        </button>
      </div>
          <form className={styles.loginForm}>
            <input type="email" placeholder="123@gmail.com" className={styles.inputField} />
            <input type="password" placeholder="password" className={styles.inputField} />
            <button type="submit" className={styles.loginButton}>Login to EvaluGATE</button>
            <div className={styles.divider}>or continue with</div>
            <button className={styles.googleButton}>
              <img src={googleIcon} alt="Google" className={styles.googleIcon} />
              Sign up with Google
            </button>
            <div className={styles.signupText}>Don't have an account?</div>
            <button className={styles.signupButton}>Create your account here</button>
            <div className={styles.termsText}>By clicking continue, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></div>
          </form>
        </div>  
      </div>
    </div>
  );
}

export default Login;

