let scrn = document.getElementById("screen");
function input(x) {
  scrn.value = scrn.value + x;
}
function allclear() {
  scrn.value = scrn.value.slice(0, -1);
}
function calc() {
  scrn.value = eval(scrn.value);
}
