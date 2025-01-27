const txt = document.getElementById('txt-display');

function display(input) {
    txt.value += input;
}

function clearDisplay() {
    txt.value = "";
}

function calculate() {
    try {
        txt.value = eval(txt.value);
    } catch (error) {
        txt.value = "Error";
    }
}