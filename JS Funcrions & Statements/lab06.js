function positiveAndNegativeNumbers (a, b, c) {
    let arr = [a, b, c];
    let negNumbers = arr.filter((x) => x < 0).length;
    
    if (negNumbers == 2 || negNumbers == 0) {
        console.log('Positive');
    } else {
        console.log('Negative');
    }
}