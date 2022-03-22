var timeEL = document.querySelector(".timer");
var startQuestion
var secondsLeft = 60;
var score = ""



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


var questions = [
  {
questionTitle:"Q1",
Choices:["Choice1 , Choice2,Choice3,Choice4"],
Answer:"Choice1"
}, 
{
questionTitle:"Q2",
Choices:["Choice1,Choice2,Choice3,Choice4"],
Answer:"Choice1"},
{
  
  
questionTitle:"Q3",
Choices:["Choice1,Choice2,Choice3,Choice4"],
Answer:"Choice3"
},

{
  questionTitle:"Q4",
  Choices:["Choice1,Choice2,Choice3,Choice4"],
  Answer:"Choice3"
  }
  ];

// Now I need a for loop to run through this array and display the questions on the HTMl

// On click of an answer I need the question to cycle to the next question immmediatly whether right or wrong




// if/else statement for answer selection (correct answers to the questions will have a true value assigned, while false for the wrong answer.)

// if (true){ text-Correct!, Go to next question}

// else {timer--, text-Wrong!, Go to next question}



// if last question then go to initial page after answer selection

// if timer reaches zero go to initial page



// after game is over 


function startQuiz() {
 
  // document.querySelector(#Quizcontainer).innerhtml
  // pullQuestions();
  setTime();
  
}



function saveScore()

// Need a get item to save input of initials and score. Will be linked to a button


function displayScore()

// Need set item for any potentially locally stored Highscores, these would load when user navigates to Highscore page





