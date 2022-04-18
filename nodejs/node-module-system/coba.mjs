function cetakNama (nama) {
    return `Hi, nama saya ${nama}`
}

const PI = 3.14;

const person = {
    name: "Azisya Luthfi Bintang",
    age: 17,
    sayHello(){
        return `Nama Saya ${this.name} dan umur saya ${this.age}`
    }
}

class Bye {
    constructor(name) {
        this.name = person.name
    }

    sayBye(){
        console.info(`Bye ${this.name}`)
    }
}

// module.exports.printName = cetakNama;
// module.exports.PI = PI;
// module.exports.person = person;
// module.exports.bye = new Bye;

// Cara lebih singkat untuk eksport

// module.exports = {
//     printName: cetakNama,
//     PI: PI,
//     person: person,
//     bye: new Bye
// }

// Cara lebih cepat (menggunakan es6 jika namanya nama variable dan valuenya sama hanya masukan 1 saja)
// module.exports = {
//     printName: cetakNama, 
//     PI, // Tidak perlu didefinisikan jika namanya sama
//     person, // same
//     bye: new Bye
// }


// MENGGUNAKAN JAVASCRIPT MODULE (EXPORT)

export {cetakNama, PI, person, Bye}


