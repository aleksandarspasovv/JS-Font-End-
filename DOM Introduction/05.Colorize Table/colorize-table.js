function colorize() {
    let rows = [...document.querySelectorAll('tbody tr')];
    let output = rows.pop();

    let sum = 0;

    for (row of output){
        let col = row.children[row.children.length - 1];
        sum += Number(col.textContent);
    }

    
}