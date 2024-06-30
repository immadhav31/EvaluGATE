import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AdminStyles.module.css';
import quizImage from '../../assets/quiz.jpg';

const Admin = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const quizzes = [
    { id: 1, title: 'S6 Linear Algebra Quiz', image: quizImage },
    { id: 2, title: 'S1 SVD Quiz', image: quizImage },
    { id: 3, title: 'S4 Robotics Quiz', image: quizImage },
    { id: 4, title: 'S6 Probability', image: quizImage }
  ];

  const handleQuizClick = (quizId) => {
    navigate('/test', { state: { quizId } });
  };

  const handleLoginClick = () => {
    navigate('/');
  };

  const filteredQuizzes = quizzes.filter(quiz => 
    quiz.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo} onClick={handleLoginClick}>EvaluGATE</div>
        <nav className={styles.mainNav}>
          <a href="#" className={styles.active}>Home</a>
          <a href="#">Classes</a>
          <a href="#">Exams</a>
          <div className={styles.searchBar}>
            <input 
              type="text" 
              placeholder="Search Quizzes" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className={styles.logoutBtn}>Logout</button>
        </nav>
      </header>
      
      <main className={styles.contentArea}>
        <h1 className={styles.pageTitle}>Available Quizzes</h1>
        
        <div className={styles.quizGrid}>
          {filteredQuizzes.map((quiz) => (
            <div 
              className={styles.quizCard} 
              key={quiz.id} 
              onClick={() => handleQuizClick(quiz.id)}
            >
              <div className={styles.quizImageContainer}>
                <img src={quiz.image} alt={quiz.title} />
              </div>
              <h3>{quiz.title}</h3>
            </div>
          ))}
        </div>
      </main>
      
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>&copy; 2024 EvaluGATE. All rights reserved.</p>
          <nav className={styles.footerNav}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Contact Us</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Admin;
