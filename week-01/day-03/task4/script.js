// calculator.js - Simple Version
function EnterNumber(num) {
    const display = document.getElementById('Answer');
    if (display.value === '0' || display.value === 'Error') {
        display.value = num;
    } else {
        display.value += num;
    }
}

function EnterOperator(op) {
    const display = document.getElementById('Answer');
    display.value += op;
}

function EnterEqual() {
    const display = document.getElementById('Answer');
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}

function EnterClear() {
    document.getElementById('Answer').value = '0';
}