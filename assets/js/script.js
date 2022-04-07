const time = document.querySelector("#timer");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const optionA = document.getElementById("A");
const optionB = document.getElementById("B");
const optionC = document.getElementById("C");
const scoreDiv = document.getElementById("highscore-container");
const start = document.getElementById("start");

start.addEventListener("click", startQuiz())

var count = 59;
var score = 0;


var myQuestions = [
	{	
		question: "What kind of value does boolean represent?",
		a: 'nothing/empty',
		b: 'true and false',
		c: 'alphabets',
		d: 'number',
		correctAnswer: 'b'
	},
	{
		question: "What kind of value does null represent?",
		a: 'nothing/empty',
		b: 'true and false',
		c: 'alphabets',
		d: 'number',
		correctAnswer: 'a'
	},
    {
		question: "What kind of value does string hold?",
		a: 'nothing/empty',
		b: 'true and false',
		c: 'alphabets',
		d: 'number',
		correctAnswer: 'c'
	},
    {
		question: "What kind of value does number hold?",
		a: 'nothing/empty',
		b: 'true and false',
		c: 'alphabets',
		d: 'number',
		correctAnswer: 'd'
	},
    {
		question: "What does Date() do?",
		a: 'Creates an HTML anchor to be used as a hypertext target',
		b: 'Parses a string representation of a date and time and then returns the internal millisecond representation for the same',
		c: 'Returns the function that created the corresponding instance of the object',
		d: 'Returns the present date and time',
		correctAnswer: 'd'
	},
    {
		question: "Inside which HTML element do we put the JavaScript?",
		a: '<script>',
		b: '<js>',
		c: '<javascript>',
		d: '<head>',
		correctAnswer: 'a'
	},
    {
		question: "How do you create a function in JavaScript?",
		a: 'function myFunction()',
		b: 'function : myFunction()',
		c: 'function = myFunction()',
		d: 'function == myFunction()',
		correctAnswer: 'c'
	},
    {
		question: "How do you write an IF statement in JavaScript?",
		a: 'if i == 5 then',
		b: 'if i = 5',
		c: 'if i = 5 then',
		d: 'if (i == 5)',
		correctAnswer: 'd'
	},
    {
		question: "How can you add a comment in a JavaScript?",
		a: '//This is a comment',
		b: '<!--This is a comment-->',
		c: ' "This is a comment" ',
		d: 'comment.(This is a commnet',
		correctAnswer: 'a'
	},
    {
		question: "How do you round the number 7.25, to the nearest integer??",
		a: 'rnd(7.25)',
		b: 'Math.rnd(7.25)',
		c: 'Math.round(7.25)',
		d: 'round(7.25)',
		correctAnswer: 'c'
	},
    {
		question: "How do you find the number with the highest value of x and y?",
		a: 'ceil.(x,y)',
		b: 'Math.max(x,y)',
		c: 'top(x,y)',
		d: 'Math.ceil(x,y)',
		correctAnswer: 'b'
	},
    {
		question: "How can you detect the client's browser name?",
		a: 'browser.name',
		b: 'client.navName',
		c: 'navigator.appName',
		d: 'browser.client',
		correctAnswer: 'c'
	},
    {
		question: "Which event occurs when the user clicks on an HTML element?",
		a: 'onmouseclick',
		b: 'onmouseover',
		c: 'onchange',
		d: 'onclick',
		correctAnswer: 'd'
	},
    {
		question: "How do you declare a JavaScript variable?",
		a: 'variable carName;',
		b: 'v carName',
		c: 'var carName',
		d: 'v cn',
		correctAnswer: 'c'
	},
    {
		question: "Which operator is used to assign a value to a variable?",
		a: 'x',
		b: '-',
		c: '*',
		d: '=',
		correctAnswer: 'd'
	},
    {
		question: "What will the following code return: Boolean(10 > 9)?",
		a: 'true',
		b: 'false',
		c: 'NaN',
		d: 'undefined',
		correctAnswer: 'a'
	},
    {
		question: "How do you write an IF statement in JavaScript?",
		a: 'if i == 5 then',
		b: 'if i = 5',
		c: 'if i = 5 then',
		d: 'if (i == 5)',
		correctAnswer: 'd'
	},
    {
		question: "How do you write an IF statement in JavaScript?",
		a: 'if i == 5 then',
		b: 'if i = 5',
		c: 'if i = 5 then',
		d: 'if (i == 5)',
		correctAnswer: 'd',
	},
    {
		question: "How do you write an IF statement in JavaScript?",
		a: 'if i == 5 then',
		b: 'if i = 5',
		c: 'if i = 5 then',
		d: 'if (i == 5)',
		correctAnswer: 'd'
	},
    {
		question: "How do you write an IF statement in JavaScript?",
		a: 'if i == 5 then',
		b: 'if i = 5',
		c: 'if i = 5 then',
		d: 'if (i == 5)',
		correctAnswer: 'd'
	},
    {
		question: "How do you write an IF statement in JavaScript?",
		a: 'if i == 5 then',
		b: 'if i = 5',
		c: 'if i = 5 then',
		d: 'if (i == 5)',
		correctAnswer: 'd'
	}
];

var number = 0;
//function to show a question

function showQuestion () {
	const q = myQuestions[number];

	question.innerHTML = "<p>" + q.question + "</p>";
	a.innerHTML = q.a;
	b.innerHTML = q.b;
	c.innerHTML = q.c;
	d.innerHTML = q.d;
}

//start the Quiz

function startQuiz() {
	start.style.display = "none";
	showQuestion();
	quiz.style.display = "block";
	timer();
}

// check the answer 

var check = function(answer) {
	if (answer == myQuestions[number].correctAnswer) {
		score++;
	}
	else {
		//run the function to reduce time
	}
	number++;
	showQuestion();
}

//show score 

var quizScore = function() {
	scoreDiv.innerHTML = "<p>Score: " + score + "</p>";
	scoreDiv.style.display = "block";

}

var timer = function() {
    var cowntdown = setInterval (function() {
    
        if (count > 0) {
            console.log(count);
            time.textContent = "Time: " + count;
            count--;
        }
        
        else{
            clearInterval(timer);
        }

    }, 1000);
}