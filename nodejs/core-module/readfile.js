/* READLINE */

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