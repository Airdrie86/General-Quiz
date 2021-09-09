let startButton = document.getElementById("start-btn");
let choiceButton = document.getElementById("choice-box")
let sportButton = document.getElementById("sport");
let geographyButton = document.getElementById("geography");
let generalKnowledgeButton = document.getElementById("general-knowledge");
let questionBox = document.getElementById("question-box");
let welcome = document.getElementById("welcome");

startButton.addEventListener("click", startGame)

function startGame() {
    startButton.classList.add("hide")
    welcome.classList.add("hide")
    choiceButton.classList.remove("hide")
}

let maxQuestions = 4

sportButton.addEventListener("click", sportGame )
function sportGame() {
    
}

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
]