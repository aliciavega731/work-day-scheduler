$(document).ready(function () {
  // Current day at the top of the page
  $("#currentDay").text(moment().format("dddd, MMMM Do, YYYY h:mm a"));

  // Get items from localstorage. This part is missing.

  

  // From modules -- Set item to localstorage
  $(".saveBtn").on("click", function() {
    var userInput = $(this)
      .siblings(".description")
      .val(); // Made variable to serve as value in localstorage
    var hourBlock = $(this)
      .siblings(".description")
      .attr("id"); // Key should show the id of the block
    
    localStorage.setItem(hourBlock, userInput);
  });

  // Past, present, future
  $(".time-block").each(function(){
    var timeBlock = $(this).attr("id");
    currentHour = moment().hour();
    if (timeBlock < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
      } else if (timeBlock === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
      } else if (timeBlock > currentHour) {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  
});
