function writeCharInBetween (a, b) {
    let firstCode = a.charCodeAt(0);
    let secodnCode = b.charCodeAt(0);

    let start = Math.min(firstCode, secodnCode);
    let end = Math.max(firstCode, secodnCode);

    let resutlArr = [];
    for (let i = start + 1; i < end; i++) {
        resutlArr.push(String.fromCharCode(i));
        
    }

    console.log(resutlArr.join(' '));
}