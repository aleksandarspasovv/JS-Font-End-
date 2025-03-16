const solve(num1, num2, operator) => ({
    'multiply': num1 * num2,
    'divide': num1 / num2,
    'add': num1 + num2,
    'subtract': num1 - num2
})[operator]


function solve2(number1, number2, operation2) {
    let mapper = {
        'multiply': (a,b) => a*b,
        'divide': (a,b) => a/b,
        'add': (a,b) => a+b,
        'subtract': (a,b) => a-b
    };

    let action = mapper[operation2];
    console.log(action(number1, number2));
}