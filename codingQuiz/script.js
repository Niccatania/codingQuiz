var timeEL = document.querySelector(".timer");
var startQuestion= -1
var secondsLeft = 60;
var score = 0



function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEL.textContent = secondsLeft;

    if(secondsLeft === 0) {
      
      clearInterval(timerInterval);
    
      sendMessage();
    }

  }, 1000); }


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





// Accesing questions and answers, then cycling through them with the if/else statement

// if/else statement for answer selection (correct answers to the questions will have a true value assigned, while false for the wrong answer.)

// if (true){ text-Correct!, Go to next question}

// else {timer--, text-Wrong!, Go to next question}



// if last question then go to initial page after answer selection

// if timer reacges zero go to initial page



// after game is over 


function beginQuiz() {
 
  var secondsLeft = 60;
  pullQuestions();
  setTime();
  
}




