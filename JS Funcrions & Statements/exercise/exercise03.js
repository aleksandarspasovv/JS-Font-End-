function solve(a, b) {
    let firstNumber = a.charCodeAt(0);
    let secondNumber = b.charCodeAt(0);

    if (firstNumber > secondNumber) {
        writeAsciiDymbol(secondNumber, firstNumber);
    } else {
        writeAsciiDymbol(firstNumber, secondNumber);
    }
}

function writeAsciiDymbol(firstChar, secondChar) {
    let resultArr = [];
    for (let i = firstChar; i < secondChar; i++){
        resultArr.push(String.fromCharCode(i));

    }
    console.log(resultArr.join(' '));
}

solve('a', 'z');