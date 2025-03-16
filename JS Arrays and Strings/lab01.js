function sliceAttay(num, arr) {
    let myArr = arr.slice(0, num);
    let reversedArr = myArr.reverse();
    let asString = reversedArr.join(' ');

    console.log(asString)
}

sliceAttay(4, [1, 2, 3, 4, 5, 60])