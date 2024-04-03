
function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
function calculateSquareRoot() {
    const display = document.getElementById('display');
    try {
        display.value = Math.sqrt(eval(display.value));
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateSine() {
    const display = document.getElementById('display');
    try {
        display.value = Math.sin(eval(display.value));
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateCosine() {
    const display = document.getElementById('display');
    try {
        display.value = Math.cos(eval(display.value));
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateTangent() {
    const display = document.getElementById('display');
    try {
        display.value = Math.tan(eval(display.value));
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateNaturalLog() {
    const display = document.getElementById('display');
    try {
        display.value = Math.log(eval(display.value));
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateCommonLog() {
    const display = document.getElementById('display');
    try {
        display.value = Math.log10(eval(display.value));
    } catch (error) {
        display.value = 'Error';
    }
}
document.getElementById('clear').addEventListener('click', clearDisplay);
document.getElementById('equals').addEventListener('click', calculate);

document.getElementById('square-root').addEventListener('click', calculateSquareRoot);
document.getElementById('sine').addEventListener('click', calculateSine);
document.getElementById('cosine').addEventListener('click', calculateCosine);
document.getElementById('tangent').addEventListener('click', calculateTangent);
document.getElementById('natural-log').addEventListener('click', calculateNaturalLog);
document.getElementById('common-log').addEventListener('click', calculateCommonLog);

const buttons = document.querySelectorAll('button:not(#clear):not(#equals):not(#square-root):not(#sine):not(#cosine):not(#tangent):not(#natural-log):not(#common-log)');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        document.getElementById('display').value += button.textContent;
    });
});
