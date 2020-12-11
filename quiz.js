var pos = 0;
var correct = 0;
var quiz, quiz_status, question, choice, choices, chA, chB, chC, chD;

// pos is position of where the user in the test or which question they're up to
var pos = 0, quiz, quiz_status, question, choice, choices, chA, chB, chC, chD, correct = 0;
// this is a multidimensional array with 4 inner array elements with 5 elements inside them
var questions = [
  {
      question: "What feature in JavaScript asks the user a question and provides a response field for the answer?",
      a: "alert box",
      b: "prompt box",
      c: "confirm box",
      d: "input box",
      answer: "B"
    },
  {
      question: "What are the 3 fundamental programming languages of the modern web?",
      a: "HTML, Python, CSS",
      b: "JavaScript, Python, JQuery",
      c: "HTML, Python, JavaScript",
      d: "HTML, CSS, JavaScript",
      answer: "D"
    },
  {
      question: "What displays a pop-up message to the user in JavaScript?",
      a: "alert",
      b: "prompt",
      c: "confirm",
      d: "pop-up",
      answer: "A"
    },
  {
      question: "What expression in JavaScript prints content to the debugger?",
      a: "console",
      b: "console.log",
      c: "log",
      d: "console.print",
      answer: "B"
    },
    {
      question: "What is used in JavaScript to run repeated blocks of code over a set period?",
      a: "tree loop",
      b: "two loop",
      c: "for loop",
      d: "loop",
      answer: "C"
    },
  {
    question: "What do the letters CSS represent?",
    a: "Central Style Sheet",
    b: "Cascading Style Sections",
    c: "Central Style Sections",
    d: "Cascading Style Sheet",
    answer: "D"
  },
  {
    question: "What type of selectors are (p, a, div, span) in CSS?",
    a: "ID selectors",
    b: "Class selectors",
    c: "Element selectors",
    d: "None of the Above",
    answer: "C"
  },
  {
    question:"What termination is used in CSS and JavaScript?",
    a: "period .",
    b: "semicolon ;",
    c: "single quotes'",
    d: "dollar sign $",
    answer: "B"
  }
  ];
// this get function is short for the getElementById function  
function get(x){
  return document.getElementById(x);
}
// this function renders a question for display on the page
function renderQuestion(){
  quiz = get("quiz");
  if(pos >= questions.length){
    quiz.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
    get("quiz_status").innerHTML = "Quiz Completed";
    // resets the variable to allow users to restart the test
    pos = 0;
    correct = 0;
    // stops rest of renderQuestion function running when test is completed
    return false;
  }
 get("quiz_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
  
  question = questions[pos].question;
  chA = questions[pos].a;
  chB = questions[pos].b;
  chC = questions[pos].c;
  chD = questions[pos].d;
  // display the question
  quiz.innerHTML = "<h3>"+question+"</h3>";
  // display the answer options
  // the += appends to the data we started on the line above
  quiz.innerHTML += "<label> <input type='radio' name='choices' value='A'> "+chA+"</label><br>";
  quiz.innerHTML += "<label> <input type='radio' name='choices' value='B'> "+chB+"</label><br>";
  quiz.innerHTML += "<label> <input type='radio' name='choices' value='C'> "+chC+"</label><br>";
  quiz.innerHTML += "<label> <input type='radio' name='choices' value='D'> "+chD+"</label><br><br>";
  quiz.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}
function checkAnswer(){
  // use getElementsByName because we have an array which it will loop through
  choices = document.getElementsByName("choices");
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
    }
  }
  // checks if answer matches the correct choice
  if(choice == questions[pos].answer){
    //each time there is a correct answer this value increases
    correct++;
  }
  // changes position of which character user is on
  pos++;
  // then the renderQuestion function runs again to go to next question
  renderQuestion();
}
// Add event listener to call renderQuestion on page load event
window.addEventListener("load", renderQuestion);
