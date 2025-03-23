function solve(arr) {
    let finalNames = {};
    for (let i=0; i < arr.length; i++){
        let name = arr[i];
        let personalNumber = name.length;
        finalNames[name] = personalNumber;
    }

    for (let name in finalNames){
        console.log(`Name: ${name} -- Personal Number: ${finalNames[name]}`);
    }
}

solve([

    'Silas Butler',
    
    'Adnaan Buckley',
    
    'Juan Peterson',
    
    'Brendan Villarreal'
    
    ])