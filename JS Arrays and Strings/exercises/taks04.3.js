function weirdSorting(arr) {
    let newArr = [];
    arr.sort((a,b) => a-b);

    while (arr.length) {
        if (newArr.length % 2 == 0) {
            newArr.push(arr.shift());
        } else {
            newArr.push(arr.pop());
        }
    }
    console.log(newArr)
}

weirdSorting([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]) //[-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]