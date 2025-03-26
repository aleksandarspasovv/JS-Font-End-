class Storage {

    constructor(capacity) {
        this.capacity = capacity;
        this.storage = []
    }

    addProduct(product) {
        if (this.capacity <= 0){
            console.log('Storage is Full');
            return;
        }
    }
    
}