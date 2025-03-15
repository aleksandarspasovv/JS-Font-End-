let sum = 0

function sumOfNumbers(first, second) {
    for(let i = first; i <= second; i++) {
        console.log(i)
        sum += i
    }
}

sumOfNumbers(5, 10)