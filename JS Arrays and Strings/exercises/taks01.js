function rotateArr(arr, num) {
    for (let i = 0; i < num; i++) {
        let firstNum = arr.shift();
        arr.push(firstNum);
    }

    console.log(arr);
}

rotateArr([1, 2, 3, 4, 5] , 2);