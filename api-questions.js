var searchButton = $("#searchButton");
var searchInput = $("#searchInput");
var queryURL = "https://opentdb.com/api.php?amount=10";


$.ajax({
    url: queryURL,
    method: "GET",
    
}).then(function(response) {
   
    // console.log(queryURL);

    console.log(response);
    $(".questionDiv").text(response.results[0].question)
    $(".answer1").text(response.results[0].correct_answer + response.results[0].incorrect_answers)

   
});

$.ajax({
    url: "https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC",
    method: "GET",
}).then(function (response) {
    console.log(response);
});

$.ajax({
    url: "https://api.fungenerators.com/taunt/generate?category=pirate-insult&limit=5",
    method: "GET",
    contentType: "application/json",
}).then(function (response) {
    console.log(response)
});
