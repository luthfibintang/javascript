import fs from "fs";
import readline from "readline";


const rl = readline.Interface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukan Nama anda : ", (name) => {
    rl.question("Masukan Nomor HP anda : ", (noHP) => {
        const contact = {name, noHP};
        fs.readFile("../data/contacts.json", "utf-8", (err, data) => {
            if (err) {
                console.log(err)
            }
            const contacts = JSON.parse(data);

            contacts.push(contact);

            fs.writeFile('../data/contacts.json', JSON.stringify(contacts, null, 2), (err) => {
                if(err) throw err;
                console.log('Data berhasil di input')
            });
        })
        rl.close();
    })
})