$(document).ready(function () {
  // Current day at the top of the page
  $("#currentDay").text(moment().format("dddd, MMMM Do, YYYY h:mm a"));

  // TA office hours notes. Set item to local storage
  $(".saveBtn").on("click", function() {
    var userInput = $(this)
      .siblings(".description")
      .val(); // Made variable to serve as value in localstorage
    var hourBlock = $(this)
      .siblings(".description")
      .attr("id"); // Key should show the id of the block
    
    localStorage.setItem(hourBlock, userInput);
  });

  // Get items from localstorage
  



});
