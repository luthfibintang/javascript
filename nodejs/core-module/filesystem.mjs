// Core Module //

//File System //
import * as fsSync from 'fs'; //Synchronous 
import * as fspm from 'fs/promises'; // Promise
import * as fs from 'fs'; // Callback (Async)
import { stdin } from 'process';

/* PROMISE */


/* Membuat folder */
// try {
//     await fspm.mkdir("data");
//     console.log("Berhasil Membuat folder");
// } catch (error) {
//     console.log(error);
// }

/* Membuat File */
// try {
//     await fspm.writeFile('data/coba.txt', "INI file yang baru dibuat");
//     console.log("Berhasil membuat File")
// } catch (error){
//     console.log(`Ada error pada : ${error}`)
// }


/* CALLBACK */

// /* Adding File */
// fs.writeFile("test.txt", "Ini dibuat menggunakan callback", (err) => {
//     if (err) throw err;
//     console.log("Berhasil Menambah file")
// })


/* Unlink */
// fs.unlink("test.txt", (err) => {
//     if(err) throw err;
//     console.log("Berhasil menghapus file")
// });



/* Read File */
// Synchronous
// const read = fsSync.readFileSync('data/coba.txt', 'utf-8')
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
    rl.question("Masukan Umur anda : ", (umur) => {
        console.log(`Nama saya ${nama}, saya berumur ${umur}`)
        rl.close()
    })
})
