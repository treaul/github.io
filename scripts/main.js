/*Basically, anything. Everything in JavaScript is an object,
and can be stored in a variable. Keep this in mind as you learn.*/
/*
Everything in between is a comment.
*/
// This is a comment
/*document.querySelector('html').onclick = function() {};
is equivalent to

var myHTML = document.querySelector('html');
myHTML.onclick = function() {};*/


var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/logo.png') {
      myImage.setAttribute ('src','images/logo2.png');
    } else {
      myImage.setAttribute ('src','images/logo.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
