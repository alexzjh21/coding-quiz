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


