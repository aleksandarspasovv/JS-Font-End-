function printCity(city) {
    let keyCities = Object.keys(city);
    
    for (let key of keyCities) {
        console.log(`${key} -> ${city[key]}`);
    }

}

printCity({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
})