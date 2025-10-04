//your JS code here. If required.
// script.js

// Select the element with id "level"
let element = document.getElementById("level");

// Start counting from 0
let level = 0;

// Traverse up through parent nodes until <html>
while (element) {
  level++;
  element = element.parentElement; // move to parent
}

// Show the final result
alert("The level of the element is: " + level);
