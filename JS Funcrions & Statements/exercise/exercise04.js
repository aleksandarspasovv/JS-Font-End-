function oddsAndEvenNumbers(number) {
    let asString = String(number)

    let evenSum = 0
    let oddSum = 0

    for (let i = 0; i < asString.length; i++) {
        if (Number(asString[i]) % 2 == 0) {
            evenSum += Number(asString[i]);
        } else {
            oddSum += Number(asString[i]);
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}

oddsAndEvenNumbers(1000435);