function solve(data) {
    let scheduele = {};

    for (let item of data) {
        let [day, name] = item.split(' ');

        if (scheduele.hasOwnProperty(day)) {
            console.log("Error")
        } else {
            scheduele[day] = name;
            console.log("success");
        }
    }

    for (let day in scheduele){
        console.log(`${day} -> ${scheduele[day]}`);
    }
}

solve(['Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George']);