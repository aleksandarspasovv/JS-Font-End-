function solve(json) {
    let newFormat = JSON.parse(json);

    let keys = Object.entries(newFormat);

    for (let [key, value] of keys) {
        console.log(`${key}: ${value}`)
    };
}

solve('{"name": "George", "age": 40, "town": "Sofia"}');