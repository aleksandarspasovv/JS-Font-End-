function calc() {
    let num1 = document.getElementById('num1');
    let num2 = document.getElementById('num2');

    let result = Number(num1.value) + Number(num2.value);

    let resultOutput = document.getElementById('sum');
     return resultOutput.value = result;
}