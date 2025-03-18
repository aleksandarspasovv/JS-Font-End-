function phoneBook(arrStrings) {
    let phonebook = {};

    for (let item of arrStrings) {
        let [name, phone] = item.split(' ');
        phoneBook[name] = phone
    }

    for (let name in phoneBook) {
        console.log(`${name} -> ${phoneBook[name]}`)
    }
}

phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'
])