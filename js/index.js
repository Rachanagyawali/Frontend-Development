const decreasebtn = document.getElementById("decreasebtn");
const resetbtn = document.getElementById("resetbtn");
const increasebtn = document.getElementById("increasebtn"); // Fixed the typo here
const countlabel = document.getElementById("count-label");
let count = 0;

increasebtn.onclick = function () {
    count++;
    countlabel.textContent = count; // Fixed textContent
};

decreasebtn.onclick = function () {
    count--;
    countlabel.textContent = count; // Fixed textContent
};

resetbtn.onclick = function () {
    count = 0;
    countlabel.textContent = count; // Fixed textContent
};

