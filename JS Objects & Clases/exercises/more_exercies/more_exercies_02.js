function sortProducts(products) {
    let productMap = {};

    for (let product of products) {
        let [productName, productPrice] = product.split(' : ');
        productMap[productName] = Number(productPrice);
    }

    let sortedEntries = Object.entries(productMap).sort((a, b) => a[0].localeCompare(b[0]));

    let currentLetter = '';

    for (let [productName, productPrice] of sortedEntries) {
        let firstLetter = productName[0];
        if (firstLetter !== currentLetter) {
            currentLetter = firstLetter;
            console.log(currentLetter);
        }
        console.log(`  ${productName}: ${productPrice}`);
    }
}


sortProducts([

    'Appricot : 20.4',
    
    'Fridge : 1500',
    
    'TV : 1499',
    
    'Deodorant : 10',
    
    'Boiler : 300',
    
    'Apple : 1.25',
    
    'Anti-Bug Spray : 15',
    
    'T-Shirt : 10'
    
    ])