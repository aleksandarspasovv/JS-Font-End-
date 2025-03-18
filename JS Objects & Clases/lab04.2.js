function solve(data) {
    let enties = data.map(i => i.split(' '));

    let phoneBook = Object.fromEntries(enties);

    for (let name in phoneBook) {
        console.log(`${name} -> ${phoneBook[name]}`);
    }
}