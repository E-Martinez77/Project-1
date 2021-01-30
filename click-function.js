var searchButton = $("#searchButton");
var searchInput = $("#searchInput");
var queryURL = "https://opentdb.com/api.php?amount=10";
var correctAnswers = "";
var incorrect1 = "";
var incorrect2 = "";
var incorrect3 = "";
var questions = "";
var score = 0;
var nextQuestion = "";

// var btn1 = document.getElementById("#answer1");
// var btn2 = document.getElementById("#answer2");
// var btn3 = document.getElementById("#answer3");
// var btn4 = document.getElementById("#answer4");
// var index = 0;
var btn1 = $("#answer1");
var btn2 = $("#answer2");
var btn3 = $("#answer3");
var btn4 = $("#answer4");

$.ajax({
    url: queryURL,
    method: "GET",

}).then(function (response) {
    var response = response;
    // JSON.parse(response.replace(/&quot;/g, '"'));
    var index = 0;
    questions = response.results[index].question
    correctAnswers = response.results[index].correct_answer;
    incorrect1 = response.results[index].incorrect_answers[0];
    incorrect2 = response.results[index].incorrect_answers[1];
    incorrect3 = response.results[index].incorrect_answers[2];
    maxQuestions = 10;
    console.log(response)
    // var answer = [correctAnswers, incorrect1, incorrect2, incorrect3]
    // shuffle(answer);
    // for (let j = 1; j <= answer.length; j++) {
    //     $("#answer" + [j]).text(answer[j])


    // }
    // btn1.append(correctAnswers);
    // btn2.append(incorrect1);
    // btn3.append(incorrect2);
    // btn4.append(incorrect3);
    // console.log(questions + "this is line 40")
    function quizQuestions() {
        score = 0;
        nextQuestion = 0;
        // questions;
        console.log(questions + " this is inside quizQuestions function")
    }
    function getNextQuestion() {
        if (response.results.indexOf(response.results[index]) === 0 || nextQuestion <= maxQuestions)
            index++;
        console.log(index)
        console.log(questions + "this is Questions incremented ")
        questions = response.results[index].question;
        correctAnswers = response.results[index].correct_answer;
        incorrect1 = response.results[index].incorrect_answers[0];
        incorrect2 = response.results[index].incorrect_answers[1];
        incorrect3 = response.results[index].incorrect_answers[2];
        maxQuestions = 10;
        $("#questionDiv").text(questions)
        btn1.text(correctAnswers);
        btn2.text(incorrect1);
        btn3.text(incorrect2);
        btn4.text(incorrect3);
    }

    var answer = [correctAnswers, incorrect1, incorrect2, incorrect3]
    console.log(answer);
    shuffle(answer);
    console.log(response);
    $("#questionDiv").text(questions)
    $("#answers").text(answer)
    console.log(questions);
    for (let i = 0; i < answer.length; i++) {
        const choices = answer[i];
        console.log(choices)

    }
    // function shuffle(answer) {
    //     console.log(answer.sort(() => Math.random() - 0.5));
    // }
    $("button").on("click", function () {
        getNextQuestion()
        quizQuestions()

    })
});

// $("button").click(function () {
//     alert("test")
//     getNextQuestion()
//     quizQuestions()

// })

// $.ajax({
//     url: "https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC",
//     method: "GET",
// }).then(function (response) {
//     console.log(response);
// });

// $.ajax({
//     url: "https://api.fungenerators.com/taunt/generate?category=pirate-insult&limit=5",
//     method: "GET",
//     contentType: "application/json",
// }).then(function (response) {
//     console.log(response)
// });

function shuffle(answer) {
    console.log(answer.sort(() => Math.random() - 0.5));
}
// shuffle([1, 2, 3, 4, 5])