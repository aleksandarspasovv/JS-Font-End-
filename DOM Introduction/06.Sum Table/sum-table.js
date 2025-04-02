function sumTable() {
    let rows = [...document.querySelectorAll('tbody tr')];
    let output = rows.pop();

    let sum = 0;

    for (let row of rows){
        let col = row.children[row.children.length - 1];
        sum += Number(col.textContent);
    }

    let result = document.getElementById('sum');
    result.textContent = sum;
}