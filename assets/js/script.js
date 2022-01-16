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

function quiz(questions, quizContainer, resultContainer) {
    function showQuestion(questions, quizContainer) {

    }
}


