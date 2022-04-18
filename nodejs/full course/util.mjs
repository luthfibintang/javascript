import util from "util";

const midName = "Luthfi";
const lastName = "Bintang";

// Menggunakan backtip
console.log(`Hello ${midName} ${lastName}`)

// menggunakan util
console.info(util.format("Hello %s %s", midName, lastName));


const person = {
    firstName: "Azisya",
    lastName: "Bintang"
}

// Menggunakan Backtip
console.info(`Person : ${JSON.stringify(person)}`);

//menggunakan util
console.log("person : %j", person);
