let startButton = document.getElementById("start-btn");
let choiceButton = document.getElementById("choice-box")
let sportButton = document.getElementById("sport");
let geographyButton = document.getElementById("geography");
let generalKnowledgeButton = document.getElementById("general-knowledge");
let questionBox = document.getElementById("question-box");
let welcome = document.getElementById("welcome");
let questions = document.getElementById("questions")

let sportQuestions = [
    {
        Question: "In which year did Roger Federer win his first Wimbledon title?",
        Answer: [
            {text: "2003", correct: true},
            {text: "2005", correct: false},
            {text: "2006", correct: false},
            {text: "2002", correct: false},
        ]
    },
    {
        Question: "Which course is The Masters golf tournament held?",
        Answer: [
            {text: "Pebble Beach", correct: false},
            {text: "TPC Sawgrass", correct: false},
            {text: "Masters", correct: true},
            {text: "Torrey Pines", correct: false},
        ]
    },
    {
        Question: "What is Usain Bolt’s 100m world record time?",
        Answer: [
            {text: "9.62", correct: false},
            {text: "9.58", correct: true},
            {text: "9.65", correct: false},
            {text: "9.55", correct: false},
        ]
    },
    {
        Question: "Which cricket club plays at The Oval?",
        Answer: [
            {text: "Yorkshire", correct: false},
            {text: "Hampshire", correct: false},
            {text: "Surrey", correct: true},
            {text: "Lancashire", correct: false},
        ]
    },
    {
        Question: "Which country’s rugby team is called The Springboks?",
        Answer: [
            {text: "New Zealand", correct: false},
            {text: "South Africa", correct: true},
            {text: "Fiji", correct: false},
            {text: "Austrailia", correct: false},
        ]
    },
    {
        Question: "The The Pittsburgh Penguins play which sport?",
        Answer: [
            {text: "Baseball", correct: false},
            {text: "American Football", correct: false},
            {text: "Basketball", correct: false},
            {text: "Ice Hockey", correct: true},
        ]
    },
]

startButton.addEventListener("click", startGame)

function startGame() {
    startButton.classList.add("hide")
    welcome.classList.add("hide")
    choiceButton.classList.remove("hide")
}

let currentQuestion = {}
let sQuestion = [...sportQuestions]
let maxQuestions = 5
let questionIndex = Math.floor(Math.random() * sQuestion.length)

sportButton.addEventListener("click", sportGame)

function sportGame() {
    questionBox.classList.remove("hide")
    choiceButton.classList.add("hide")
    currentQuestion = sQuestion[questionIndex]
    questions.innerText = sQuestion.Question
}
console.log(questionIndex);
console.log(currentQuestion);
console.log(sQuestion);
