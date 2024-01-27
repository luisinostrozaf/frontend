let currentOperation = null;
let currentNumber = null;
let previousNumber = null;

// Loop over the numbers 0 through 9
for (let i = 0; i <= 9; i++) {
    const numero = document.querySelector(`.numero-${i}`);
    numero.addEventListener("click", function () {
        const display = document.querySelector(".display-value");
        // If currentNumber is null, set it to the clicked number
        // Otherwise, append the clicked number to the current number
        currentNumber = currentNumber === null ? String(i) : currentNumber + String(i);
        display.value = currentNumber;
    });
}

// Add event listeners to the operation buttons
document.querySelector(".sumar").addEventListener("click", function () {
    previousNumber = currentNumber;
    currentNumber = null;
    currentOperation = "addition";
});

document.querySelector(".restar").addEventListener("click", function () {
    previousNumber = currentNumber;
    currentNumber = null;
    currentOperation = "subtraction";
});

document.querySelector(".multiplicar").addEventListener("click", function () {
    previousNumber = currentNumber;
    currentNumber = null;
    currentOperation = "multiplication";
});

document.querySelector(".dividir").addEventListener("click", function () {
    previousNumber = currentNumber;
    currentNumber = null;
    currentOperation = "division";
});

// Add event listener to the equals button
document.querySelector(".igual").addEventListener("click", function () {
    const display = document.querySelector(".display-value");
    if (currentOperation === "addition") {
        display.value = Number(previousNumber) + Number(currentNumber);
    } else if (currentOperation === "subtraction") {
        display.value = previousNumber - currentNumber;
    } else if (currentOperation === "multiplication") {
        display.value = previousNumber * currentNumber;
    } else if (currentOperation === "division") {
        display.value = previousNumber / currentNumber;
    }
    currentOperation = null;
    previousNumber = null;
    currentNumber = null;
});

// Add event listener to the clear button
document.querySelector(".clear").addEventListener("click", function () {
    currentOperation = null;
    currentNumber = null;
    previousNumber = null;
    const display = document.querySelector(".display-value");
    display.value = "";
});

// Add event listener to the borrar button
document.querySelector(".borrar").addEventListener("click", function () {
    if (currentNumber !== null && currentNumber.length > 0) {
        currentNumber = currentNumber.slice(0, -1);
        const display = document.querySelector(".display-value");
        display.value = currentNumber;
    }
});
