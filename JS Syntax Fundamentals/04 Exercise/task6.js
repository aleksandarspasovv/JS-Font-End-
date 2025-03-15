let finalResult = 0

function digitDum(number) {
    let numberAsString = number.toString();
    for(let i = 0; i < numberAsString.length; i++) {
         let asNumber = parseInt(numberAsString[i]);
         finalResult += asNumber;
    }
}

digitDum(1234);
console.log(finalResult)