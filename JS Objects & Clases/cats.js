class Cat{
    name;
    age;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    meow() {
        console.log(`${this.name}, age ${this.age} says Meow`);
    }
}

let catDescriptors = ['Mellow 2', ['Tom 2']];

let cats = [];

for (let entry of catDescriptors){
    let [name, age] = entry.split(' ');
    let cat = new Cat(name, age);

    cats.push(cat);
}


console.log(cats)

for (let cat of cats){
    cat.meow();
}