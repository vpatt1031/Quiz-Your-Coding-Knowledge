//Initializing references to the HTML
var questionText = document.getElementById("question");
var btnA = document.getElementById("btnA");
var btnB = document.getElementById("btnB");
var btnC = document.getElementById("btnC");
var btnD = document.getElementById("btnD");
var startBtn = document.getElementById("startBtn");
var timeRemainingText = document.getElementById("timeRemaining");
var yourScore


//Initializing Logical values (i.e. score, timer... etc...)
var timer = 60;
var currentQuestion = 0;
var score = 0
{
//Array for the quiz questions and answers
var questions = [
  {
    question:
      "What feature in JavaScript asks the user a question and provides a response field for the answer?",
    a: "alert box",
    b: "prompt box",
    c: "confirm box",
    d: "input box",
    answer: "prompt box",
  },
  {
    question:
      "What are the 3 fundamental programming languages of the modern web?",
    a: "HTML, Python, CSS",
    b: "JavaScript, Python, JQuery",
    c: "HTML, Python, JavaScript",
    d: "HTML, CSS, JavaScript",
    answer: "HTML, CSS, JavaScript",
  },
  {
    question: "What displays a pop-up message to the user in JavaScript?",
    a: "alert",
    b: "prompt",
    c: "confirm",
    d: "pop-up",
    answer: "alert",
  },
  {
    question: "What expression in JavaScript prints content to the debugger?",
    a: "console",
    b: "console.log",
    c: "log",
    d: "console.print",
    answer: "console.log",
  },
  {
    question:
      "What is used in JavaScript to run repeated blocks of code over a set period?",
    a: "tree loop",
    b: "two loop",
    c: "for loop",
    d: "loop",
    answer: "for loop",
  },
  {
    question: "What do the letters CSS represent?",
    a: "Central Style Sheet",
    b: "Cascading Style Sections",
    c: "Central Style Sections",
    d: "Cascading Style Sheet",
    answer: "Cascading Style Sheet",
  },
  {
    question: "What type of selectors are (p, a, div, span) in CSS?",
    a: "ID selectors",
    b: "Class selectors",
    c: "Element selectors",
    d: "None of the Above",
    answer: "Element selectors",
  },
  {
    question: "What termination is used in CSS and JavaScript?",
    a: "period .",
    b: "semicolon ;",
    c: "single quotes'",
    d: "dollar sign $",
    answer: "semicolon ;",
  },
];
{
function beginQuiz(){
    startTimer();
    displayQuestion();
  
}


function startTimer(){
    var quizInterval = setInterval(function () {
        timer--;
        timeRemainingText.textContent = timer;

        //edge case if the user runs out of questions to answer? what to do then?
        if(timer <= 0){
            clearInterval(quizInterval);
            console.log("done!")
        }
    }, 1000)
}

function displayQuestion(){
    if(currentQuestion < questions.length){

        questionText.textContent = questions[currentQuestion].question;
        
        btnA.textContent = questions[currentQuestion].a;
        btnB.textContent = questions[currentQuestion].b;
        btnC.textContent = questions[currentQuestion].c;
        btnD.textContent = questions[currentQuestion].d;
    }

    currentQuestion++;
}

function handleAnswer(){
    var lastAnswer = this.textContent;
    
    if(lastAnswer == questions[currentQuestion - 1].answer) {
        console.log("correct")
        score += 10;
        timer += 5;
    }else{
        console.log("incorrect")
        timer -= 5;
    }
    displayQuestion();
}
}

//Instantiating Event System
startBtn.addEventListener("click", beginQuiz);
btnA.addEventListener("click", handleAnswer);
btnB.addEventListener("click", handleAnswer);
btnC.addEventListener("click", handleAnswer);
btnD.addEventListener("click", handleAnswer);
}