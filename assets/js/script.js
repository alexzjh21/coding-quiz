const questionEl = document.querySelector(".question");
const questionsFormEl = document.querySelector(".questions-form");
const timerEl = document.querySelector(".timer");
const buttonEl = document.querySelector(".btn");
const choicesEl = document.querySelector(".choices")
const choice1El = document.querySelector(".choice1");
const choice2El = document.querySelector(".choice2");
const choice3El = document.querySelector(".choice3");
const choice4El = document.querySelector(".choice4");
const answerEl = document.querySelector(".answer")
const scoreEl = document.querySelector(".high-score")
const headingEl = document.querySelector(".heading");
const scoreReportEl = document.querySelector(".score-report");
const highScoreFormEl = document.querySelector(".high-score-form");
const instructionEl = document.querySelector(".instruction");
const submitScoreEl = document.querySelector(".submit");
   
questionsFormEl.style.display = "none";
highScoreFormEl.style.display = "none";


var questionForm = [
	{	
		"question": "What kind of value does boolean represent?",
		"answers": [
			"nothing/empty",
			"true and false",
			"alphabets",
			"number",
		],
		"correctAnswer": "true and false"
	},
	{
		"question": "What kind of value does null represent?",
		"answers": [
			"nothing/empty",
			"true and false",
			"alphabets",
			"number",
		],
		"correctAnswer": "nothing/empty"
	},
    {
		"question": "What kind of value does string hold?",
		"answers": [
			"nothing/empty",
			"true and false",
			"alphabets",
			"number",
		],
		"correctAnswer": "alphabets"
	},
    {
		"question": "What kind of value does number hold?",
		"answers": [
			"nothing/empty",
			"true and false",
			"alphabets",
			"number",
		],
		"correctAnswer": "number"
	},
    {
		"question": "What does Date() do?",
		"answers": [
			"Creates an HTML anchor to be used as a hypertext target",
			"Parses a string representation of a date and time and then returns the internal millisecond representation for the same",
			"Returns the function that created the corresponding instance of the object",
			"Returns the present date and time",
		],
		"correctAnswer": "Returns the present date and time"
	},
    {
		"question": "Inside which HTML element do we put the JavaScript?",
		"answers": [
			"<script>",
			"<js>",
			"<javascript>",
			"<head>",
		],
		"correctAnswer": "<script>"
	},
    {
		"question": "How do you create a function in JavaScript?",
		"answers": [
			"function myFunction()",
			"function : myFunction()",
			"function = myFunction()",
			"function == myFunction()",
		],
		"correctAnswer": "function = myFunction()"
	},
    {
		"question": "How do you write an IF statement in JavaScript?",
		"answers": [
			"if i == 5 then",
			"if i = 5",
			"if i = 5 then",
			"if (i == 5)",
		],
		"correctAnswer": "if (i == 5)"
	},
    {
		"question": "How can you add a comment in a JavaScript?",
		"answers": [
			"//This is a comment",
			"<!--This is a comment-->",
			" \"This is a comment\" ",
			"comment.(This is a commnet",
		],
		"correctAnswer": "//This is a comment"
	},
    {
		"question": "How do you round the number 7.25, to the nearest integer??",
		"answers": [
			"rnd(7.25)",
			"Math.rnd(7.25)",
			"Math.round(7.25)",
			"round(7.25)",
		],
		"correctAnswer": "Math.round(7.25)"
	},
    {
		"question": "How do you find the number with the highest value of x and y?",
		"answers": [
			"ceil.(x,y)",
			"Math.max(x,y)",
			"top(x,y)",
			"Math.ceil(x,y)",
		],
		"correctAnswer": "Math.max(x,y)"
	},
    {
		"question": "How can you detect the client's browser name?",
		"answers": [
			"browser.name",
			"client.navName",
			"navigator.appName",
			"browser.client",
		],
		"correctAnswer": "navigator.appName"
	},
    {
		"question": "Which event occurs when the user clicks on an HTML element?",
		"answers": [
			"onmouseclick",
			"onmouseover",
			"onchange",
			"onclick",
		],
		"correctAnswer": "onclick"
	},
    {
		"question": "How do you declare a JavaScript variable?",
		"answers": [
			"variable carName;",
			"v carName",
			"var carName",
			"v cn",
		],
		"correctAnswer": "var carName"
	},
    {
		"question": "Which operator is used to assign a value to a variable?",
		"answers": [
			"x",
			"-",
			"*",
			"=",
		],
		"correctAnswer": "="
	},
    {
		"question": "What will the following code return: Boolean(10 > 9)?",
		"answers": [
			"true",
			"false",
			"NaN",
			"undefined",
		],
		"correctAnswer": "true"
	},
    {
		"question": "How do you write an IF statement in JavaScript?",
		"answers": [
			"if i == 5 then",
			"if i = 5",
			"if i = 5 then",
			"if (i == 5)",
		],
		"correctAnswer": "if (i == 5)"
	},
    {
		"question": "How do you log a message or data to your console?",
		"answers": [
			"console()",
			"const console =",
			"console.log()",
			"log.console()",
		],
		"correctAnswer": "console.log()"
	},
    {
		"question": "What is JSON?",
		"answers": [
			"JavaScript Object Network",
			"Just Super Outstanding Name",
			"JavaScript Overflow Notation",
			"JavaScript Object Notation",
		],
		"correctAnswer": "JavaScript Object Notation"
	},
    {
		"question": "How do you write an arrow function in JavaScript?",
		"answers": [
			"myFunction = ()=>",
			"=> ()",
			"() <==> myFunction",
			"arrowFunc () {}",
		],
		"correctAnswer": "myFunction = ()=>"
	},
];

var i = 0;
var z = 0;
var score = 0;
var timeLeft = 100;

var displayQuestion = ()=> {
    questionEl.textContent = questionForm[i].question;
    choice1El.textContent = questionForm[i].answers[0];
    choice2El.textContent = questionForm[i].answers[1];
    choice3El.textContent = questionForm[i].answers[2];
    choice4El.textContent = questionForm[i].answers[3];
}

var showResult = (e)=> {
    let correct = answerEl
    let inCorrect = answerEl
    e.stopPropagation()
    if (e.target.outerText === questionForm[i].correctAnswer) {
        correct.textContent = "Correct!"
        score += 100 
        scoreEl.textContent = score
        setTimeout(()=> {
            answerEl.textContent = ""
            i++
			if (i > 20) {
				i = 0;
			} 
            displayQuestion()
        }, 1000)
        
    } else {
        inCorrect.textContent = "Incorrect"
        setTimeout(()=> {
            answerEl.textContent = ""
            timeLeft = timeLeft - 10;
            i++
			if (i > 20) {
				i = 0;
			}
            displayQuestion()
        }, 1000)
    }
}

// countdown function
var countDown = ()=> {
    var timeInterval = setInterval(()=> {
        if (timeLeft === 0) {
            clearInterval(timeInterval)
            endGame()
        } 
        else if (timeLeft === 1) {
            timerEl.textContent = `${timeLeft} second remaining`;
            timeLeft--;
        } 
        else if (i===10) {
            clearInterval(timeInterval)
            endGame()
        } else {
            timerEl.textContent = `${timeLeft} seconds remaining`;
            timeLeft--;
        }
    }, 1000);
}

//Start Game
var startGame = ()=>{
    buttonEl.style.display = "none"
    instructionEl.style.display = "none"
    headingEl.style.display = "none"
    score = 0 
    questionsFormEl.style.display = "none"
    highScoreFormEl.style.display = "none"
    choicesEl.style.display = "block"
    scoreEl.textContent = score
    //This activates clicking on my answers and runs them through the show result when clicked
    choice1El.addEventListener("click", showResult);
    choice2El.addEventListener("click", showResult);
    choice3El.addEventListener("click", showResult);
    choice4El.addEventListener("click", showResult);
    i=0
    timeLeft = 100
    questionsFormEl.style.display = "block";
    timerEl.textContent = `${timeLeft} seconds remaining`;
    countDown()
    displayQuestion()
    saveScore()
}

// Game ended
var endGame = ()=> {
    headingEl.style.display = "block"
    timerEl.textContent = "Game over!";
    buttonEl.textContent = "Play Again";
    buttonEl.style.display = "block";
    questionsFormEl.style.display = "none";
    highScoreFormEl.style.display = "block";
    scoreReportEl.textContent = `Your score is ${score} and you had ${timeLeft} seconds remaining!`;
}

//Save the scores
var saveScore = ()=> {
    var userInitialsEl = document.querySelector(".initials").value;
    var userScore = score
    var scoreInput = {
        initials: userInitialsEl,
        score: userScore,
    }
    var oldList = localStorage.getItem("High Scores")
    var newList = JSON.parse(oldList) ?? []
    newList.push(scoreInput)
    //Show Rankers
    newList.sort((a, b) => b.score - a.score)
    newList.splice(3)
    localStorage.setItem("High Scores", JSON.stringify(newList))
}

//Start game button
buttonEl.addEventListener("click", ()=>startGame());

//Local storage
submitScoreEl.addEventListener("click", (event)=>{
    saveScore()
    window.location.href="highscore.html"
})