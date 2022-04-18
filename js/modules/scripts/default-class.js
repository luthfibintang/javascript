export default class {
    constructor(name) {
        this.name = name;
    }

    sayHello(){
        console.info(`Hello ${this.name}`);
    }
}