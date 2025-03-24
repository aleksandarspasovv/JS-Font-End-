function solve(stock, products) {
    storeStockProducts = {};

    for (let i=0; i < products.length; i+=2){
        let [product, quantity] = [products[i], Number(products[i+1])];
        if (!(product in storeStockProducts)) {
            storeStockProducts[product] = quantity;
        } else {
            storeStockProducts[product] += quantity;
        }

    }
    

    for (let i=0; i < stock.length; i+=2){
        let [product, quantity] = [stock[i], Number(stock[i+1])];
        
        if (!(product in storeStockProducts)){
            storeStockProducts[product] = quantity;
        } else {
            storeStockProducts[product] += quantity;
        }
    }

    for (product in storeStockProducts) {
        console.log(`${product} -> ${storeStockProducts[product]}`)
    }
}

solve([

    'Chips', '5', 'CocaCola', '9', 'Bananas',
    
    '14', 'Pasta', '4', 'Beer', '2'
    
    ],
    
    [
    
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    
    'Tomatoes', '70', 'Bananas', '30'
    
    ])