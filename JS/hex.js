const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const color = document.getElementById("input-box");
const change = document.getElementById("change");

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
btn1.addEventListener("click", function () {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[randomColor()];
    }
    document.body.style.backgroundColor = hexColor;
    color.value = hexColor;
});

btn2.addEventListener("click", function () {
    document.body.style.backgroundColor = "#808080";
});

change.addEventListener("click", function () {
    let value = color.value;
    document.body.style.backgroundColor = value;
});

function randomColor() {
    return Math.floor(Math.random() * hex.length);
}