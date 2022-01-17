var time = document.querySelector("#timer");
var count = 59;
var myQuestions = [
	{
		question: "What kind of value does boolean represent?",
		answers: {
			a: 'nothing/empty',
			b: 'true and false',
			c: 'alphabets',
            d: 'number'
		},
		correctAnswer: 'b'
	},
	{
		question: "What kind of value does null represent?",
		answers: {
			a: 'nothing/empty',
			b: 'true and false',
			c: 'alphabets',
            d: 'number'
		},
		correctAnswer: 'a'
	},
    {
		question: "What kind of value does string hold?",
		answers: {
			a: 'nothing/empty',
			b: 'true and false',
			c: 'alphabets',
            d: 'number'
		},
		correctAnswer: 'c'
	},
    {
		question: "What kind of value does number hold?",
		answers: {
			a: 'nothing/empty',
			b: 'true and false',
			c: 'alphabets',
            d: 'number'
		},
		correctAnswer: 'd'
	},
    {
		question: "What does Date() do?",
		answers: {
			a: 'Creates an HTML anchor to be used as a hypertext target',
			b: 'Parses a string representation of a date and time and then returns the internal millisecond representation for the same',
			c: 'Returns the function that created the corresponding instance of the object',
            d: 'Returns the present date and time'
		},
		correctAnswer: 'd'
	},
    {
		question: "Inside which HTML element do we put the JavaScript?",
		answers: {
			a: '<script>',
			b: '<js>',
			c: '<javascript>',
            d: '<head>'
		},
		correctAnswer: 'a'
	},
    {
		question: "How do you create a function in JavaScript?",
		answers: {
			a: 'function myFunction()',
			b: 'function : myFunction()',
			c: 'function = myFunction()',
            d: 'function == myFunction()'
		},
		correctAnswer: 'c'
	},
    {
		question: "How do you write an IF statement in JavaScript?",
		answers: {
			a: 'if i == 5 then',
			b: 'if i = 5',
			c: 'if i = 5 then',
            d: 'if (i == 5)'
		},
		correctAnswer: 'd'
	},
    {
		question: "How can you add a comment in a JavaScript?",
		answers: {
			a: '//This is a comment',
			b: '<!--This is a comment-->',
			c: ' "This is a comment" ',
            d: 'comment.(This is a commnet'
		},
		correctAnswer: 'a'
	},
    {
		question: "How do you round the number 7.25, to the nearest integer??",
		answers: {
			a: 'rnd(7.25)',
			b: 'Math.rnd(7.25)',
			c: 'Math.round(7.25)',
            d: 'round(7.25)'
		},
		correctAnswer: 'c'
	},
    {
		question: "How do you find the number with the highest value of x and y?",
		answers: {
			a: 'ceil.(x,y)',
			b: 'Math.max(x,y)',
			c: 'top(x,y)',
            d: 'Math.ceil(x,y)'
		},
		correctAnswer: 'b'
	},
    {
		question: "How can you detect the client's browser name?",
		answers: {
			a: 'browser.name',
			b: 'client.navName',
			c: 'navigator.appName',
            d: 'browser.client'
		},
		correctAnswer: 'c'
	},
    {
		question: "Which event occurs when the user clicks on an HTML element?",
		answers: {
			a: 'onmouseclick',
			b: 'onmouseover',
			c: 'onchange',
            d: 'onclick'
		},
		correctAnswer: 'd'
	},
    {
		question: "How do you declare a JavaScript variable?",
		answers: {
			a: 'variable carName;',
			b: 'v carName',
			c: 'var carName',
            d: 'v cn'
		},
		correctAnswer: 'c'
	},
    {
		question: "Which operator is used to assign a value to a variable?",
		answers: {
			a: 'x',
			b: '-',
			c: '*',
            d: '='
		},
		correctAnswer: 'd'
	},
    {
		question: "What will the following code return: Boolean(10 > 9)?",
		answers: {
			a: 'true',
			b: 'false',
			c: 'NaN',
            d: 'undefined'
		},
		correctAnswer: 'a'
	},
    {
		question: "How do you write an IF statement in JavaScript?",
		answers: {
			a: 'if i == 5 then',
			b: 'if i = 5',
			c: 'if i = 5 then',
            d: 'if (i == 5)'
		},
		correctAnswer: 'd'
	},
    {
		question: "How do you write an IF statement in JavaScript?",
		answers: {
			a: 'if i == 5 then',
			b: 'if i = 5',
			c: 'if i = 5 then',
            d: 'if (i == 5)'
		},
		correctAnswer: 'd'
	},
    {
		question: "How do you write an IF statement in JavaScript?",
		answers: {
			a: 'if i == 5 then',
			b: 'if i = 5',
			c: 'if i = 5 then',
            d: 'if (i == 5)'
		},
		correctAnswer: 'd'
	},
    {
		question: "How do you write an IF statement in JavaScript?",
		answers: {
			a: 'if i == 5 then',
			b: 'if i = 5',
			c: 'if i = 5 then',
            d: 'if (i == 5)'
		},
		correctAnswer: 'd'
	},
    {
		question: "How do you write an IF statement in JavaScript?",
		answers: {
			a: 'if i == 5 then',
			b: 'if i = 5',
			c: 'if i = 5 then',
            d: 'if (i == 5)'
		},
		correctAnswer: 'd'
	}
];


const start = document.getElementById('startQuiz');
start.addEventListener('click', function (event) {
    timer();
})

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


var showQuestions = function() {
    var random = Math.floor(Math.random*10);
    i = random;
    var problem = myQuestions[i];
    var paragraph = document.createElement("p")
    var content = document.body.appendChild(paragraph);
}