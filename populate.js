var searchButton = $("#searchButton");
var searchInput = $("#searchInput");
var queryURL = "https://opentdb.com/api.php?amount=10";
var correctAnswers = "";
var incorrect1 = "";
var incorrect2 = "";
var incorrect3 = "";
var questions = "";




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
    var answer = [correctAnswers, incorrect1, incorrect2, incorrect3]
    console.log(answer);
    shuffle(answer);
    console.log(response);
    $(".questionDiv").text(response.results[0].question)
    $(".answer1").text(response.results[0].correct_answer + response.results[0].incorrect_answers)
    console.log(questions);
    for (let i = 0; i < answer.length; i++) {
        const element = answer[i];
        console.log(element);


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