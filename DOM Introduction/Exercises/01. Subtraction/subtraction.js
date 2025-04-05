function subtract() {
    let firstNumberField = document.getElementById('firstNumber');
    let secondNumberField = document.getElementById('secondNumber');

    let result = Number(firstNumberField.value) - Number(secondNumberField.value);

    let resultOutput = document.getElementById('result');
    resultOutput.textContent = result.toFixed(2); // rounding for nice display

    return result;
}
