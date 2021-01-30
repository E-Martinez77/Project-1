var searchButton = $("#searchButton");
var searchInput = $("#searchInput");
var queryURL = "https://opentdb.com/api.php?amount=10";
var correctAnswers = "";
var incorrect1 = "";
var incorrect2 = "";
var incorrect3 = "";
var questions = "";
// var btn1 = document.getElementById("#answer1");
// var btn2 = document.getElementById("#answer2");
// var btn3 = document.getElementById("#answer3");
// var btn4 = document.getElementById("#answer4");

var btn1 = $("#answer1");
var btn2 = $("#answer2");
var btn3 = $("#answer3");
var btn4 = $("#answer4");
$.ajax({
    url: queryURL,
    method: "GET",

}).then(function (response) {
    var index = 0;
    questions = response.results[index].question;
    correctAnswers = response.results[index].correct_answer;
    incorrect1 = response.results[index].incorrect_answers[0];
    incorrect2 = response.results[index].incorrect_answers[1];
    incorrect3 = response.results[index].incorrect_answers[2];
    btn1.append(correctAnswers);
    btn2.append(incorrect1);
    btn3.append(incorrect2);
    btn4.append(incorrect3);

    var answer = [btn1, btn2, btn3, btn4]
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

});

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

function shuffle(array) {
    console.log(array.sort(() => Math.random() - 0.5));
}

// shuffle([1, 2, 3, 4, 5])