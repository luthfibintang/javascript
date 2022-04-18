const firstName = "Azisya";
const middleName = "Luthfi";
const lastName = "Bintang";

function hello(){
    console.info(`Hello From Bintang`)
}

class Person {
    constructor() {
        this.name = "Bintang"
    }

    sayHello(name){
        console.info(`Hello ${this.name}, my name is ${name}`);
    }
}

export {firstName, middleName, lastName, hello, Person};