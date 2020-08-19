var i = 0;
var txt = "Rowan Dudas";
var speed = 90;

function typeName() {
  if (i < txt.length) {
    document.getElementById("hero-name").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeName, speed);
  }
}
