function laodingBar(number) {
    let smallNumber = number / 10;
    let finalResult = []

    finalResult.push(`${number}% [`)
    
    for (let i = 0; i < smallNumber; i++) {
        finalResult.push('%')
    }

    for (let x = 0; x < (10 - smallNumber); x++) {
        finalResult.push('.')
    }

    finalResult.push(']');

    console.log(finalResult.join(''));

    if (smallNumber < 10) {
        console.log('Still Loading...');
    } else {
        console.log('100% Complete');
    }

}

laodingBar(10);
laodingBar(20);
laodingBar(30);
laodingBar(40);
laodingBar(50);
laodingBar(80);
laodingBar(90);
laodingBar(100);