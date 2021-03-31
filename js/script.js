var startBtn = document.querySelector(".start_btn button");
var infoBox = document.querySelector(".info_box");
var quitBtn = info_box.querySelector(".buttons .quit");
var restartBtn = info_box.querySelector(".buttons .restart");
var quizBox = document.querySelector(".quiz_box");
var resultBox = document.querySelector(".result_box");
var optionList = document.querySelector(".option_list");

//show info box
startBtn.onclick = ()=>{
    infoBox.classList.add("activeInfo"); 
}

//hide info box
quitBtn.onclick = ()=>{
    infoBox.classList.remove("activeInfo"); 
}

restartBtn.onclick = ()=>{
    //hide info box
    infoBox.classList.remove("activeInfo"); 
    //show quiz box
    quizBox.classList.add("activeQuiz"); 
    //calling showQuestions function
    showQuestions(0); 
    //passing 1 parameter to queCounter
    queCounter(1); 
    //calling startTimer function
    startTimer(75); 
    //calling startTimerLine function
    startTimerLine(0); 
}
function showQuestions(index){
    var que_text = document.querySelector(".que_text");

    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
                    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
                    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
                    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    //adding new span tag inside que_tag
    que_text.innerHTML = que_tag; 
    //adding new div tag inside option_tag
    option_list.innerHTML = option_tag; 
    
    var option = optionList.querySelectorAll(".option");

    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

var questions = [
    {
    numb: 1,
    question: "Commonly used datatypes DO NOT include:",
    answer: "",
    options: [
      "1. strings",
      "2. booleans",
      "3. alerts",
      "4. numbers"
    ]
  },
    {
    numb: 2,
    question: "The condition in a n if/else statement is enclosed within _______.",
    answer: "3. parentheses",
    options: [
      "1. commas",
      "2. curly braces",
      "3. parentheses",
      "4. square brackets"
    ]
  },
    {
    numb: 3,
    question: "Arrays in JavaScript can be used to store ______.",
    answer: "3. all of the above",
    options: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above"
    ]
  },
    {
    numb: 4,
    question: "String values must be closed within ______ when being assigned to variables. ",
    answer: "",
    options: [
      "1. commas",
      "2. curly brackets",
      "3. quotes",
      "4. parentheses"
    ]
  },
    {
    numb: 5,
    question: "A very useful tool during development and debugging for printing content too the debugger is?",
    answer: "",
    options: [
      "1. JavaScript",
      "2. terminal/bash",
      "3. for loops",
      "4. console log"
    ]
  },