var timeEL = document.querySelector(".timer");
var choicesEl = document.querySelector("#choices");
var startQuestion
var secondsLeft = 60;
var score = ""
var currentQuestionIndex = 0;
var submitBtn = document.querySelector("#submit");
var showInitials=document.querySelector("#superIn")



function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEL.textContent = "Timer:" + secondsLeft;

    if(secondsLeft === 0  | currentQuestionIndex === questions.length) {
      
      clearInterval(timerInterval);
      endQuiz();
    }

  }, 1000); }


function renderLastRegistered() {
  localStorage.getItem("myText", myText);

  if (!myText ) {
    return;
  }

  else {showsuperIn.textContent = myText;
  }

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

  document.querySelector(".timer").classList.add("hide");

  renderLastRegistered();

  
  
}

function myFunction() {
  var x = document.getElementById("myText").value;
  document.getElementById("demo").innerHTML = x;

  document.querySelector(".highScoreScreen").classList.add("hide");

  document.querySelector(".viewhighScores ").classList.remove("hide");

  var input = document.getElementById(".inputBtn");
localStorage.setItem("", input.val());
console.log(input);
renderLastRegistered();
}


function replay(){
  


 
    document.querySelector("#startScreen").classList.remove("hide");
  
    document.querySelector(".viewhighScores").classList.add("hide");
  
    
    setTime();
    showQuestions();
     return;


    //  reset timer
    // reset questions


  function clearScores(){

  }

}


// var mTxt = document.querySelector("#myText");

// mTxt.textContent = storageText;


// var storageText =localStorage.getItem("storageText");

// addButton.addEventListener("click", function() {

//     localStorage.setItem("storageText", storageText);
// })




// add wrong or correct text to answer selection

// turn timer off when highscore page is clicked 


//  button to replay quiz

// capture time as score 

// button to save highscore to local storage( initials and time)

// When highscore page is loaded display whatever recorded Scores and initals are saved to local storage

// style everything


submitBtn.addEventListener("click", function(event) {
  // event.preventDefault();

  var myText = document.querySelector("#myText").value;

  if (myText === "") {
    displayMessage("Enter something, anything.");
  } else  {

  localStorage.setItem("myText", myText);
  // localStorage.setItem("password", password);
  renderLastRegistered(); 
}
});




