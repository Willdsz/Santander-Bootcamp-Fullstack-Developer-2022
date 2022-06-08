let count = 0

const CURRENT_NUMBER = document.getElementById('currentNumber');
const BUTTON_PLUS = document.getElementById('button_plus');
const BUTTON_LESS = document.getElementById('button_less');


function increment() {
    count++;
    CURRENT_NUMBER.innerHTML = count;

    change_color()
    disable_button()
}

function decrement() {
    count--;
    CURRENT_NUMBER.innerHTML = count;

    change_color()
    disable_button()
}

function change_color() {
    if (count < 0) {
        CURRENT_NUMBER.style.color = 'red'
    } else {
        CURRENT_NUMBER.style.color = 'black'
    }
}

function disable_button(){


    if (count <= -10) {
        BUTTON_LESS.disabled = true
    } else if (count >= 10) {
        BUTTON_PLUS.disabled = true
    } else {
        BUTTON_LESS.disabled = false
        BUTTON_PLUS.disabled = false
    }
}
