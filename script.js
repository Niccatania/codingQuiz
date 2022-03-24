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
  var myText = document.querySelector("#myText").value;
  localStorage.getItem("myText", myText);

  if (!myText ) {
    return;
  }

  else {superIn.textContent = myText;
  }

}

// questions variable to loop through

var questions = [
  {
questionTitle:"How can I create a comment in a Javascript file?",
Choices:["//Comment" , "'Comment'","</Comment","!!Comment"],
Answer:"//Comment"
}, 
{
questionTitle:"Which Javascript popup box lets you select between 'Cancel' or 'Ok' ",
Choices:["Alert box" , "Prompt box","Confirm box","Two choice box"],
Answer:"Confirm box"},
{
  
  
questionTitle:"Which type of storage will keep data saved over page refresh?",
Choices:["Storage unit" , "Refresh storage","Local storage","Global storage"],
Answer:"Local storage"
},

{
  questionTitle:"Which option would call the function 'intheFunction",
  Choices:["call.intheFunction;" , "intheFunction{};","intheFunction();'",".intheFunction;"],
  Answer:"intheFunction();"
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




