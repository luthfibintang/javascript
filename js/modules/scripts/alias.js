const name = "Azisya Luthfi Bintang";

function sum(first, second){
    return first + second;
}

class Person {
    constructor() {

    }

    sayHello(name) {
        console.log(`Hello ${name}`);
    }
}

// Multiple Export
export {name as fullname, sum as total, Person};