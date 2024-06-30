import React, { useState } from 'react';
import styles from './LoginStyles.module.css';
import bgImg from '../../assets/Planet-1.svg';
import bgImg2 from '../../assets/Planet.svg';
import bgImg3 from '../../assets/Eclipse.svg';
import googleIcon from '../../assets/google-icon.svg';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState('admin');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleLoginClick = () => {
    navigate('/');
  };

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.email.includes('@')) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      navigate('/admin');
    }
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
          <form className={styles.loginForm} onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="123@gmail.com"
              className={styles.inputField}
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            {errors.email && <p className={styles.errorText}>{errors.email}</p>}
            <input
              type="password"
              name="password"
              placeholder="password"
              className={styles.inputField}
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            {errors.password && <p className={styles.errorText}>{errors.password}</p>}
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