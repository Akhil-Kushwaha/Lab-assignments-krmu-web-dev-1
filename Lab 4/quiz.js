// Quiz Questions
var quizQuestions = [
    { question: "Which HTML tag is used to create a hyperlink?", answer: "<a>" },
    { question: "Which property in CSS is used to change the text color?", answer: "color" },
    { question: "Which symbol is used for comments in JavaScript?", answer: "//" },
    { question: "Which HTML tag is used to insert an image?", answer: "<img>" },
    { question: "Which CSS layout model helps in creating responsive layouts?", answer: "flexbox" }
];

// Quiz Function
function runQuiz() {
    var score = 0;

    for (var i = 0; i < quizQuestions.length; i++) {
        var userAns = prompt(quizQuestions[i].question);
        
        if (!userAns) {
            alert("No answer entered.");
            continue;
        }

        var cleanAns = userAns.toLowerCase().trim();

        if (cleanAns === quizQuestions[i].answer) {
            alert("Correct!");
            score++;
        } else {
            alert("Wrong! Correct answer is: " + quizQuestions[i].answer);
        }
    }

    alert("Quiz Finished! Your Score: " + score + " / " + quizQuestions.length);
}

// Run the quiz
runQuiz();
