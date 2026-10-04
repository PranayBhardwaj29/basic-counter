const display = document.querySelector('.screen');
const incre = document.querySelector('.incre');
const decre = document.querySelector('.decre');
const reset = document.querySelector('.reset');

let count = 0;

function render() {
    display.textContent = count;
}

incre.addEventListener("click", function () {
    count++;
    render();
});

decre.addEventListener("click", function () {
    if (count === 0) {
        alert("Reached 0!");
    } else {
        count--;
        render();
    }
});

reset.addEventListener("click", function () {
    count = 0;
    render();
});