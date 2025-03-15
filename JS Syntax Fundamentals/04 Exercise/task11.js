function solve(num) {
    let sum = 0;

    let asString = num.toString();
    let same = true;
    let firstChar = asString[0];

    for (let char of asString) {
        sum += Number(char);
        if (char != firstChar) {
            same = false;
        }
    }

    console.log(same);
    console.log(sum);
}

solve(1234);
