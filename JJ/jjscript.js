var colorin = document.getElementById("colorin");
var btn = document.getElementById("btn");
btn.addEventListener("click", btnApply);
var h1 = document.getElementById("h1");

function btnApply() {
    h1.style.color = colorin.value;
}