$(document).ready(function () {
  // Current day at the top of the page
  $("#currentDay").text(moment().format("dddd, MMMM Do, YYYY h:mm a"));

  // Get items from localstorage

  // From modules. Set item to localstorage
  $(".saveBtn").on("click", function() {
    var userInput = $(this)
      .siblings(".description")
      .val(); // Made variable to serve as value in localstorage
    var hourBlock = $(this)
      .siblings(".description")
      .attr("id"); // Key should show the id of the block
    
    localStorage.setItem(hourBlock, userInput);
  });

 


});
