// Set the date we're counting down to (March 22, 2024, 12:00 AM)
var countDownDate = new Date("April 22, 2024 00:00:00").getTime() + 1000; // Add one second

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  var countdownDisplay = days + "D:" + hours + "H:" + minutes + "M:" + seconds + "S";
  document.getElementById("demo").innerHTML = countdownDisplay;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "WIEHack 5.0 is live";
  }
}, 1000);
