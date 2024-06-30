import React, { useState } from 'react';
import styles from './SignupStyles.module.css';
import bgImg from '../../assets/bg.svg';
import googleIcon from '../../assets/google-icon.svg';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState('admin');
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.email.includes('@')) {
      newErrors.email = 'Email must contain @';
      isValid = false;
    }

    if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Phone number must be exactly 10 digits';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      //update backend
      navigate('/Admin');
    }
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
          <form className={styles.loginForm} onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              className={styles.inputField}
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              className={styles.inputField}
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
              pattern="[0-9]{10}"
              title="Phone number must be 10 digits"
              onInvalid={(e) => e.target.setCustomValidity('Please enter a 10-digit phone number')}
              onInput={(e) => e.target.setCustomValidity('')}
          />
            {errors.phoneNumber && <p className={styles.errorText}>{errors.phoneNumber}</p>}
            <input
              type="email"
              name="email"
              placeholder="College Email"
              className={styles.inputField}
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            {errors.email && <p className={styles.errorText}>{errors.email}</p>}
            <input
              type="text"
              name="username"
              placeholder="Username"
              className={styles.inputField}
              value={formData.username}
              onChange={handleInputChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className={styles.inputField}
              value={formData.password}
              onChange={handleInputChange}
              required
            />
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

export default Signup;