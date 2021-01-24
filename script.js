
var searchButton = $("#searchButton");
var searchInput = $("#searchInput");
var queryURL = "https://www.swapi.tech/api/";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response)
})
