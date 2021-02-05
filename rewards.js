var highScore = localStorage.getItem("highScore") || [];
var lastScore = localStorage.getItem("lastScore");
var finalScore = localStorage.getItem("final")
var scoreDiv = $("#scoreValue");
// var score = 0 ;
// var gifDiv = $(".gifDiv")
var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=woeSTKx31cUEbpyCR3usgJEDXyL4dFlZ";
var insult = "&tag=insult&rating=pg"
var cheer = "&tag=cheer&rating=pg"


function getGif(feedBack) {

$.ajax({
  url: queryURL + feedBack,
  method: "GET"
}).then(function(response) {
    
    var imageUrl = response.data.image_original_url;
    console.log(response.data.image_original_url)
    
    var randoImg = $("<img>");

    
    randoImg.attr("src", imageUrl);
    randoImg.attr("alt", "random image");

    
    $(".gifDiv").prepend(randoImg);


  });

}
    
    // $.ajax({
    //     url: "https://api.fungenerators.com/taunt/generate?category=pirate-insult&limit=5",
    //     method: "GET",
    //     contentType: "application/json",
    // }).then(function (response) {
    //     console.log(response)
    // });

    // scoreDiv.text(score);
    $("#score").text(finalScore)
    // scoreDiv.text(score)

function go(score) {
    
    if (score > 7){
        getGif(cheer);
  
    } else {getGif(insult);
        }
    
} 

go(finalScore)

// function upper () {
    
//     console.log("I am the best")
// }

// function middle () {
//     console.log("I am the cheer")
// }

// function getBigBrain () {
//     console.log("I am an insult")
// }
