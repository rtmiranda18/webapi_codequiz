var startBtn = document.querySelector(".startBtn button");
var infoBox = document.querySelector(".infoBox");
var quitBtn = document.querySelector(".buttons .quit");
var restartBtn = document.querySelector(".buttons .restart");
var quizBox = document.querySelector(".quizBox");
var resultBox = document.querySelector(".resultBox");
var optionList = document.querySelector(".optionList");
var answerStatus = document.querySelector(".answerStatus");
    //show info box
startBtn.addEventListener("click", function() {
    //close button
startBtn.remove("button");
    //remove info box
infoBox.remove(".infoBox")
    //start quiz
    showQuestions(0);
    countdown(75);
});

//start timer
function countdown(timeLeft) {
    var quizTimer = setInterval(function(){
        if(timeLeft <= 0){
            clearInterval(quizTimer);
        document.getElementById("countdown").innerHTML = "Finished";
        } else {
        document.getElementById("countdown").innerHTML = timeLeft + " seconds remaining";
    }
    timeLeft -= 1;
    }, 1000);
}

function showQuestions(index){
    var que_text = document.querySelector(".que_text");

    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option "><span>'+ questions[index].options[0] +'</span></div>'
                    + '<div class="option "><span>'+ questions[index].options[1] +'</span></div>'
                    + '<div class="option "><span>'+ questions[index].options[2] +'</span></div>'
                    + '<div class="option "><span>'+ questions[index].options[3] +'</span></div>';
    //adding new span tag inside que_tag
    que_text.innerHTML = que_tag; 
    //adding new div tag inside option_tag
    optionList.innerHTML = option_tag; 
    
    var option = optionList.querySelectorAll(".option");

    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected("+i+", "+index+")");
    }
}

function optionSelected(i, index) {
  //when answer is correct, move to the next question
  if (i == questions[index].answer) {
    answerStatus.innerHTML = "Correct!";
    showQuestions(index + 1);
  } 
 //when answer is incorrect 
  else {
    answerStatus.innerHTML = "Incorrect!";
  //grab value from clock and subract 10 seconds
  }
}

var questions = [
    {
    numb: 1,
    question: "Commonly used datatypes DO NOT include:",
    answer: 2,
    options: [
      "strings",
      "booleans",
      "alerts",
      "numbers"
    ]
  },
    {
    numb: 2,
    question: "The condition in a n if/else statement is enclosed within _______.",
    answer: 2,
    options: [
      "commas",
      "curly braces",
      "parentheses",
      "square brackets"
    ]
  },
    {
    numb: 3,
    question: "Arrays in JavaScript can be used to store ______.",
    answer: 3,
    options: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above"
    ]
  },
    {
    numb: 4,
    question: "String values must be closed within ______ when being assigned to variables. ",
    answer: 2,
    options: [
      "commas",
      "curly brackets",
      "quotes",
      "parentheses"
    ]
  },
    {
    numb: 5,
    question: "A very useful tool during development and debugging for printing content to the debugger is?",
    answer: 3,
    options: [
      "JavaScript",
      "terminal/bash",
      "for loops",
      "console log"
    ]
  }]