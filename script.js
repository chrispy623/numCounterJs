const add = document.querySelector(".addBtn");
const sub = document.querySelector(".subBtn");
const numDisplay = document.querySelector(".numDisplay");

let count = 0;

add.onclick = function() {
  count += 1;
  numDisplay.innerHTML = count;
};

sub.onclick = function() {
  count -= 1;
  numDisplay.innerHTML = count;
}