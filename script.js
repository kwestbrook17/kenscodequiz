var startButton = document.getElementById('start');
var timeLeftElement = document.getElementById('time-left');
var mainElement = document.querySelector('main');

var timeLeft = 60;
var questionIndex = 0;
var score = 0;

var questions = [
  {
    question: 'Which one of these is not a coding language?',
    choices: ['HTML', 'JavaScript', 'CSS', 'Github'],
    answer: 'Github'
  },
  {
    question: 'What does CSS stand for?',
    choices: ['Cascading Style Sheets', 'Color Selection Site', 'Cascading Style Site', 'Colors Shapes Sizes'],
    answer: 'Cascading Style Sheets'
  },
  {
    question: 'What is used to represent a class is CSS',
    choices: ['.', '#', '$', '<3'],
    answer: '.'
  }
];
function startQuiz() {
  startButton.disabled = true;
  setTime();

  showQuestion();
}
function setTime() {
  var timerInterval = setInterval(function () {
    timeLeft--;
    timeLeftElement.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      endQuiz();
    }
  }, 1000);
}

startButton.addEventListener('click', startQuiz);