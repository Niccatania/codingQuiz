var timeEL = document.querySelector(".timer");
var choicesEl = document.querySelector("#choices");
var startQuestion
var secondsLeft = 60;
var score = ""
var currentQuestionIndex = 0;




function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEL.textContent = "Timer:" + secondsLeft;

    if(secondsLeft === 0) {
      
      clearInterval(timerInterval);
      endQuiz();
    }

  }, 1000); 
}

// questions variable to loop through

var questions = [
  {
questionTitle:"Q1",
Choices:["Choice1" , "Choice2","Choice3","Choice4"],
Answer:"Choice1"
}, 
{
questionTitle:"Q2",
Choices:["Choice1" , "Choice2","Choice3","Choice4"],
Answer:"Choice1"},
{
  
  
questionTitle:"Q3",
Choices:["Choice1" , "Choice2","Choice3","Choice4"],
Answer:"Choice3"
},

{
  questionTitle:"Q4",
  Choices:["Choice1" , "Choice2","Choice3","Choice4"],
  Answer:"Choice3"
  }
  ];


function showQuestions(){
  var currentQuestion= questions[currentQuestionIndex];

  document.querySelector("#questionTitle").textContent = currentQuestion.questionTitle;

  choicesEl.innerHTML = "";

  currentQuestion.Choices.forEach(function(choice){
    var choiceBtn = document.createElement("button");
    choiceBtn.setAttribute("class", "choice");
    choiceBtn.setAttribute("value", choice);

    choiceBtn.textContent = choice;

    choicesEl.appendChild(choiceBtn);

    choiceBtn.onclick = answerClick;

  })

}

function answerClick(){
  if (this.value !== questions[currentQuestionIndex].Answer) {
    secondsLeft -= 10;
    
  }

  currentQuestionIndex++;

  if (currentQuestionIndex === questions.length) {
    
    endQuiz();
    
  } else {
    showQuestions();
  }
}

function startQuiz() {


 
  document.querySelector("#startScreen").classList.add("hide");

  document.querySelector(".questionScreen").classList.remove("hide");

  
  setTime();
  showQuestions();
  
}


function endQuiz(){

  document.querySelector(".questionScreen").classList.add("hide");

  document.querySelector(".highScoreScreen").classList.remove("hide");
}

function highScorepage(){



  document.querySelector("#startScreen").classList.add("hide");

  
  document.querySelector(".questionScreen").classList.add("hide");

  document.querySelector(".highScoreScreen").classList.add("hide");

  document.querySelector(".viewhighScores ").classList.remove("hide");
}


