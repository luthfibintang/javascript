// Core Module //

//File System //
const fs = require('fs')

/* Synchronous */
// try {
//     fs.writeFileSync("test.txt", "Mencoba Syncronous");
// } catch (error) {
//     console.log(error);
// }

// Unlink
// fs.unlink("test.txt")



/* CALLBACK */

// /* Adding File */
// fs.writeFile("test.txt", "Ini dibuat menggunakan callback", (err) => {
//     if (err) throw err;
//     console.log("Berhasil Menambah file")
// })


/* Unlink */
//  fs.unlink("test.txt", (err) => {
//      if(err) throw err;
//      console.log("Berhasil menghapus file")
// });



/* Read File */
// Synchronous
// const read = fs.readFileSync('data/coba.txt', 'utf-8')
// console.info(read);

// Callbacks
// fs.readFile('data/coba.txt', 'utf-8', (err, data) => {
//     if(err) throw err;
//     console.log(data);
// })
 

const readline = require('readline');
const rl = readline.Interface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukan nama anda : ", (nama) => {
    rl.question("Masukan No HP anda : ", (noHP) => {
        const contact = {nama, noHP}
        const file = fs.readFileSync("data/contacts.json", "utf-8")
        const contacts = JSON.parse(file);

        contacts.push(contact);

        fs.writeFileSync('data/contacts.json', JSON.stringify(contacts, null, 2));

        console.log("Data berhasil di input")
        
        rl.close()
    })
})
