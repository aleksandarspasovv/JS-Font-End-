function solve(arr) {
    let finalResult = [];
    
    for (let i=0; i < arr.length; i++){
        secondResult = {}
        let [name, latitude, longtitude] = arr[i].split(' | ');
        secondResult['town'] = name;
        secondResult['latitude'] = latitude;
        secondResult['longtitude'] = longtitude;
        finalResult.push(secondResult);


    }

    console.log(finalResult);

    
}

solve(['Sofia | 42.696552 | 23.32601',

'Beijing | 39.913818 | 116.363625'])