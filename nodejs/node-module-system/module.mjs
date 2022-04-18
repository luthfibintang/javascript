// // console.log("Hello Bintang")
// function sayHello(name) {
//     console.log(`Hello My Name is ${name}`);
// }

// // Menggunakan Arrow Function
// const sayBye = (name) => `Good Bye ${name}`;

// let name = "Bintang"
// sayHello(name)
// console.log(sayBye(name))


// MENGGUNAKAN REQUIRE 

// const fs = require('fs'); // Code Module
// const cetakNama = require('./coba'); // locale module
// const moment = require('moment'); // Karena tidak ada di code module maka akan mencari third party module / npm module yang akan ada di dalam folder node_modules

// const coba = require("./coba");

// console.log(coba.printName("Bintang"), coba.PI)
// console.log(coba.person.sayHello())
// coba.bye.sayBye();


// MENGGUNAKAN JAVASCRIPT MODULE

import {cetakNama, PI, person, Bye} from "./coba.mjs";

console.log(cetakNama("Bintang"));
console.log(PI);
console.log(person.sayHello())
new Bye().sayBye();


// Terkadang di nodejs masih beberapa menggunakan require tapi disarankan lebih baik menggunakan module
 
