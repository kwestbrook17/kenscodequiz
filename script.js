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

function showQuestion() {
    if (questionIndex >= questions.length) {
        endQuiz();
        return;
    }
    var questionsEl = document.querySelector('.questions');
    questionsEl.textContent = questions[questionIndex].question
    var choicesEl = document.querySelector('.choices');
    choicesEl.innerHTML = ""
    for (let i = 0; i < questions[questionIndex].choices.length; i++) {
        const element = questions[questionIndex].choices[i];
       var button = document.createElement("button")
       button.textContent = element
       button.onclick =  checkanswers

    choicesEl.append(button);

    }

}
function checkanswers(event){
    if (event.target.textContent == questions[questionIndex].answer){
        console.log("correct")
    }
    else {
        console.log("wrong")
        timeLeft -= 10
    }
    questionIndex ++ 
    showQuestion()
}

function endQuiz() {
    console.log('end of game')
    document.querySelector(".question-bank").style.display = "none"
    document.querySelector(".user-input").style.display =
    "block"
    
}
    document.querySelector(".initial")
    .addEventListener("click", function(){
        var input = document.querySelector(".initials-button").value 
        console.log(input)
        var highscoresarray = JSON.parse(localStorage.getItem("high-scores"))|| []
    highscoresarray.push(input)
    localStorage.setItem("high-scores", JSON.stringify(highscoresarray))
    })


startButton.addEventListener('click', startQuiz);