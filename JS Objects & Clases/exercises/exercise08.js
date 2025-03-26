function carPark(arr) {
    reccorderCars = [];

    for (let i=0; i < arr.length; i+=1) {
        let [direction, carNumber] = arr[i].split(', ');
        if (direction == 'IN') {
            if (!(reccorderCars.includes(carNumber))) {
                reccorderCars.push(carNumber);
            }
        } else {
            if (reccorderCars.includes(carNumber)) {
                let index = reccorderCars.indexOf(carNumber);
                reccorderCars.splice(index, 1);
            }
        }
    }

    for (let car of reccorderCars) {
        console.log(car);
    }
}


carPark(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'])