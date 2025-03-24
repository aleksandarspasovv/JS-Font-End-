class Person {
    firstName;
    lastName;
    age;

    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    sayHello() {
        console.log("Hello there!")
    }

    static formaName() {
        return `${Person.firstName} ${Person.lastName}`
    }
}

let myPerson = new Person('Alex', 'Spasov', 29);
console.log(myPerson);

myPerson.sayHello();

