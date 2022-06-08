let count = 0

const CURRENT_NUMBER = document.getElementById('currentNumber');

const BTN = document.getElementsByClassName('button');

function increment() {
    count++;
    CURRENT_NUMBER.innerHTML = count;

    change_color()
    disable_btn()
}

function decrement() {
    count--;
    CURRENT_NUMBER.innerHTML = count;

    change_color()
    disable_btn()
}

function change_color() {
    if (count < 0) {
        CURRENT_NUMBER.style.color = 'red'
    } else {
        CURRENT_NUMBER.style.color = 'black'
    }
}
