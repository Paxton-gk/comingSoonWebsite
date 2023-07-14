/*
    Paxton Giesen-Kath
    2.25.2023
*/

var i = 0;
var txt = 'coming soon...';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typewriter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }

  return
}

var baseText = 'coming soon'
var count = 0

function loading() {
  var label = document.getElementById("typewriter");
  if (count < 3) {
    label.innerHTML += ".";
    count++;
  } else {
    count = 0
    label.innerHTML = baseText
  }
  setTimeout(loading, 500);
}

window.onload = function() {
  document.getElementById("typewriter").innerHTML = ''
  //typeWriter()

  loading()
}