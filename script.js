var timeEL = document.querySelector(".timer");
var choicesEl = document.querySelector("#choices");
var startQuestion
var secondsLeft = 60;
var score = ""
var currentQuestionIndex = 0;




function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEL.textContent = secondsLeft + "";

    if(secondsLeft === 0) {
      
      clearInterval(timerInterval);
      // endQuiz();
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
    
  } else {
    showQuestions();
  }
}







// On click of an answer I need the question to cycle to the next question immmediatly whether right or wrong




// if/else statement for answer selection (correct answers to the questions will have a true value assigned, while false for the wrong answer.)

// if (true){ text-Correct!, Go to next question}

// else {timer--, text-Wrong!, Go to next question}



// if last question then go to initial page after answer selection

// if timer reaches zero go to initial page



// after game is over 


function startQuiz() {


 
  document.querySelector("#startScreen").classList.add("hide");

  document.querySelector(".questionScreen").classList.remove("hide");

  
  setTime();
  showQuestions();
  
}



// function saveScore()

// Need a get item to save input of initials and score. Will be linked to a button


// function displayScore()

// Need set item for any potentially locally stored Highscores, these would load when user navigates to Highscore page
