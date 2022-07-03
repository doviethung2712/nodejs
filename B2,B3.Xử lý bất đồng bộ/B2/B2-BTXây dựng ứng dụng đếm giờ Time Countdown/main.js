
var number = null;
function start() {
  if (number == null) {
    number = parseInt(document.getElementById("number").value);
  }
  if (number != 0) {
    document.getElementById("h").innerHTML = number;
    setTimeout("start()", 1000);
    number--;
  } else {
    document.getElementById("a").innerHTML = "counter finished";
  }
}
