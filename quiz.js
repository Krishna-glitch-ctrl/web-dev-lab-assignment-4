// Array of quiz questions and answers
const quizQuestions = [
    { question: "What is the capital of India?", answer: "delhi" },
    { question: "Which planet is known as the Red Planet?", answer: "mars" },
    { question: "What is 5 + 7?", answer: "12" },
    { question: "Who wrote the Ramayana?", answer: "valmiki" },
    { question: "Which language runs in a web browser? (JavaScript/Java)", answer: "javascript" }
  ];
  
  // Function to run the quiz
  function runQuiz() {
    let score = 0; // score initialization
  
    for (let i = 0; i < quizQuestions.length; i++) {
      let userAnswer = prompt(quizQuestions[i].question);
  
      // Handle if user presses cancel
      if (userAnswer === null) {
        alert("You cancelled the quiz!");
        return;
      }
  
      userAnswer = userAnswer.toLowerCase().trim();
  
      if (userAnswer === quizQuestions[i].answer) {
        score++;
        alert("Correct!");
      } else {
        alert("Wrong! The correct answer is: " + quizQuestions[i].answer);
      }
    }
  
    alert("Quiz completed!\nYour final score is: " + score + "/" + quizQuestions.length);
  }
  
  // Run the quiz
  runQuiz();
  