// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.




// created function for updating time
function updateTime() {
  const currentDateTime = dayjs().format('MMMM DD, YYYY [at] hh:mm:ss A');
  document.getElementById('currentDay').textContent = currentDateTime;
}
// set an interval for update time that keeps the currentDateTime updating on screen
setInterval(updateTime, 1000);

// created a ready function that initiates the outcomes of following functions upon page loading
$(document).ready( function() {
  ColorText();
  enterText();
});



// created function to dictate the color of the text according to if it's in the past, present, or future
function ColorText(){
$(".time-block").each(function () {
  // created schedule time and current date variables to compare, and used parseInt to make id into an integer
  var scheduleTime = parseInt($(this).attr("id"));
  var currentDate = dayjs().hour();
  // added classes defined in css accordingly to past, present, or future
  if (currentDate > scheduleTime) {
      $(this).addClass("past");
  } else if (currentDate < scheduleTime) {
      $(this).addClass("future");
  } else {
      $(this).addClass("present");
  }

});
}

// created on click event listener that saves information depending on which button is pressed
$('.saveBtn').on('click', function(){
  // used "this" to select sibling "textarea" of button selected
var textarea = $(this).siblings('textarea').val()
  // used "this" again for parent id 
var parentID = $(this).parent().attr('id')
  // used local storage to save text according to id
localStorage.setItem(parentID, textarea)
});


// repeated the same for delete button, but equated 'textarea' to empty after button is pressed
$('.deleteBtn').on('click', function(){
var textarea = $(this).siblings('textarea').val('');
var textarea = $(this).siblings('textarea').val();
var parentID = $(this).parent().attr('id');
localStorage.setItem(parentID, textarea);
});


