import React,  { useState } from 'react';
import styles from './SignupStyles.module.css';
import bgImg from '../../assets/bg.svg';
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
        <h1 className={styles.welcomeText}>DeepTeach.AI</h1>
      </div>
      <div className={styles.formContainer}>
      <h2 className={styles.header}>Create your account</h2>
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
            <input type="Name" placeholder="Full Name" className={styles.inputField} />
            <input type="Phone Number" placeholder="Phone Number" className={styles.inputField} />
            <input type="email" placeholder="College Email" className={styles.inputField} />
            <input type="Username" placeholder="Username" className={styles.inputField} />
            <input type="password" placeholder="Password" className={styles.inputField} />
            <button type="submit" className={styles.loginButton}>Sign up to DeepTeach.AI</button>
            <div className={styles.divider}>or continue with</div>
            <button className={styles.googleButton}>
              <img src={googleIcon} alt="Google" className={styles.googleIcon} />
              Sign up with Google
            </button>
            <div className={styles.termsText}>By clicking continue, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></div>
          </form>
        </div>  
      </div>
    </div>
  );
}

export default Login;

