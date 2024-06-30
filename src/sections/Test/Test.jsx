import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Paper,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Button,
  Box,
  CssBaseline,
  Stepper,
  Step,
  StepLabel,
  LinearProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const questions = [
    {
      id: 1,
      question: "What is the time complexity of the quicksort algorithm in its worst-case scenario?",
      options: ["O(n log n)", "O(n^2)", "O(n)", "O(log n)"],
      correctAnswer: 1
    },
    {
      id: 2,
      question: "Which of the following is NOT a valid way to prevent SQL injection?",
      options: ["Using prepared statements", "Input validation", "Escaping user inputs", "Disabling error reporting"],
      correctAnswer: 3
    },
    {
      id: 3,
      question: "In the context of concurrency, what does the term 'deadlock' refer to?",
      options: [
        "A situation where a thread is waiting for a resource that will never become available",
        "A race condition between two threads",
        "An infinite loop in a multithreaded application",
        "A memory leak in a concurrent program"
      ],
      correctAnswer: 0
    },
    {
      id: 4,
      question: "What is the primary purpose of the Virtual DOM in React?",
      options: [
        "To improve SEO of React applications",
        "To handle server-side rendering",
        "To optimize performance by minimizing actual DOM manipulation",
        "To manage global state in React applications"
      ],
      correctAnswer: 2
    },
    {
      id: 5,
      question: "Which of the following best describes a closure in JavaScript?",
      options: [
        "A way to encapsulate data and behavior",
        "A function that has access to variables in its outer lexical scope",
        "A method for creating private variables in objects",
        "A technique for implementing inheritance in JavaScript"
      ],
      correctAnswer: 1
    },
    {
      id: 6,
      question: "What is the purpose of the 'volatile' keyword in Java?",
      options: [
        "To declare a variable that can be modified by multiple threads",
        "To prevent a variable from being modified",
        "To optimize variable access in single-threaded applications",
        "To declare a constant variable"
      ],
      correctAnswer: 0
    },
    {
      id: 7,
      question: "In the context of REST APIs, what does HATEOAS stand for?",
      options: [
        "Hypertext As The Engine Of Application State",
        "Handling And Transferring Entities Over Application Services",
        "Hyperlink And Text Encoding Of Application Structures",
        "Hybrid Architecture For Transferring Entity Objects And Services"
      ],
      correctAnswer: 0
    },
    {
      id: 8,
      question: "Which of the following is NOT a principle of SOLID design?",
      options: [
        "Single Responsibility Principle",
        "Open/Closed Principle",
        "Liskov Substitution Principle",
        "Decorative Inheritance Principle"
      ],
      correctAnswer: 3
    },
    {
      id: 9,
      question: "What is the main advantage of using a B-tree data structure?",
      options: [
        "Constant-time insertion and deletion",
        "Efficient searching in sorted data",
        "Minimal memory usage",
        "Simplicity of implementation"
      ],
      correctAnswer: 1
    },
    {
      id: 10,
      question: "In the context of distributed systems, what does the CAP theorem state?",
      options: [
        "A distributed system can simultaneously provide Consistency, Availability, and Partition tolerance",
        "A distributed system can provide at most two out of three: Consistency, Availability, and Partition tolerance",
        "A distributed system must always prioritize Consistency over Availability and Partition tolerance",
        "A distributed system can never achieve true Consistency in the presence of network partitions"
      ],
      correctAnswer: 1
    }
  ];

const CustomContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
}));

const QuestionPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginBottom: theme.spacing(3),
}));

const ProgressWrapper = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(null));
  const [score, setScore] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState(600);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleAnswerOptionChange = (event) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestion] = parseInt(event.target.value);
    setSelectedAnswers(newSelectedAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    const newScore = selectedAnswers.reduce((score, answer, index) => {
      if (questions[index].correctAnswer === answer) {
        return score + 1;
      }
      return score;
    }, 0);
    setScore(newScore);
    setIsDialogOpen(true);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/admin');
  };

  return (
    <div>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Advanced Programming MCQ Test</Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Typography variant="h6">Time Remaining: {formatTime(timeRemaining)}</Typography>
        </Toolbar>
      </AppBar>
      <CustomContainer maxWidth="md">
        <ProgressWrapper>
          <LinearProgress variant="determinate" value={(currentQuestion / questions.length) * 100} />
        </ProgressWrapper>
        <Stepper activeStep={currentQuestion} alternativeLabel>
          {questions.map((_, index) => (
            <Step key={index}>
              <StepLabel>{`Question ${index + 1}`}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <QuestionPaper elevation={3}>
          <Typography variant="h5" component="h2" gutterBottom>
            Question {currentQuestion + 1} of {questions.length}
          </Typography>
          <FormControl component="fieldset">
            <FormLabel component="legend">{questions[currentQuestion].question}</FormLabel>
            <RadioGroup
              name={`question-${currentQuestion}`}
              value={selectedAnswers[currentQuestion]}
              onChange={handleAnswerOptionChange}
            >
              {questions[currentQuestion].options.map((option, i) => (
                <FormControlLabel
                  key={i}
                  value={i}
                  control={<Radio />}
                  label={option}
                />
              ))}
            </RadioGroup>
          </FormControl>
          <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handlePreviousQuestion}
              disabled={currentQuestion === 0}
            >
              Previous
            </Button>
            {currentQuestion === questions.length - 1 ? (
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                disabled={selectedAnswers.includes(null)}
              >
                Submit
              </Button>
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={handleNextQuestion}
                disabled={selectedAnswers[currentQuestion] === null}
              >
                Next
              </Button>
            )}
          </Box>
        </QuestionPaper>
      </CustomContainer>
      <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
        <DialogTitle>Test Results</DialogTitle>
        <DialogContent>
          <Typography variant="h6">
            Your score: {score} / {questions.length}
          </Typography>
          <Typography variant="body1">
            Percentage: {((score / questions.length) * 100).toFixed(2)}%
          </Typography>
        </DialogContent>
        <DialogActions>
        <Button onClick={handleLoginClick} color="primary">
          Close
        </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App;