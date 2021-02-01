$("#startButton").on("click", function (event) {
  event.preventDefault();
  event.stopPropagation();
  $("#startButton").toggleClass("hide");
});
