// Current time at the top of the page
$(document).ready(function(){
  $('#currentDay').text(moment().format("dddd, MMMM YYYY h:mm a"));
});