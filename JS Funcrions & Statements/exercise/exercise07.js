function draw(num) {
    let horizontalLine = [];
    
    for (let x = 0; x < num; x++) {
        horizontalLine.push(num);
    }

    for (let y = 0; y < num; y++) {
    console.log(horizontalLine.join(' '));
    }
}

draw(3)