function createObject(firstName, lastName, age) {
    let newObject = {
        firstName,
        lastName,
        age
    };

    return newObject;
}

console.log(createObject('Alex', 'Sopasov', 29));