import fs from "fs";
import chalk from 'chalk';
import validator from 'validator';

const dirPath = './data'

if(!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

const dataPath = './data/contacts.json'
if(!fs.existsSync(dataPath)){
    fs.writeFileSync(dataPath, '[]', 'utf-8');
}

const saveContact = (name, email, noHP) => {
    const contact = {name, email, noHP};
    fs.readFile("data/contacts.json", "utf-8", (err, data) => {
        if (err) {
            console.log(err)
        }
        const contacts = JSON.parse(data);

        // cek duplicate
        const noDup = contacts.find((contact) => contact.noHP === noHP);
        const nameDup = contacts.find((contact) => contact.name.toLowerCase() === name.toLowerCase());
        if(noDup) {
            console.log(chalk.red.bold("Nomor Telephone sudah terdaftar"))
            return false;
        }
        if(nameDup) {
            console.log(chalk.red.bold("Nama sudah terdaftar"))
            return false;
        }

        // Cek Email
        if(email){
            if(!validator.isEmail(email)){
                console.log(chalk.red.bold("Email Tidak valid"))
                return false;
            }
        }

        //cek Nomor telp
        if(noHP){
            if(!validator.isMobilePhone(noHP, 'id-ID')){
                console.log(chalk.red.bold("Nomor HP tidak valid"))
                return false;
            }
        }

        contacts.push(contact);

        fs.writeFile('data/contacts.json', JSON.stringify(contacts, null, 2), (err) => {
            if(err) throw err;
            console.log(chalk.green('Terimakasih, Data sudah berhasil di input'))
        });
    })
}

const listContact = () => {
    fs.readFile('data/contacts.json', 'utf-8', (err, data) => {
        if (err) {
            throw err;
        }
        const contacts = JSON.parse(data);
        console.log(chalk.black.bgCyan('Contact List'))
        contacts.forEach((contact, i) => {
            console.log(`${i + 1}. ${contact.name} - ${contact.noHP}`)
        });
    })
};

const detailContact = (name) => {
    fs.readFile('data/contacts.json', 'utf-8', (err, data) => {
        if (err) {
            throw err;
        }
        const contacts = JSON.parse(data);
        
        const contact = contacts.find((contact) => contact.name.toLowerCase() === name.toLowerCase());

        if(contact) {
            console.log(`Name : ${contact.name}`)
            console.log(`PhoneNumber : ${contact.noHP}`);
            if (contact.email) {
                console.log(`Email : ${contact.email}`)
            }   
        } else {
            console.log(chalk.red(`${name} Tidak Terdaftar`))
            return false;
        }

    })
}

const deleteContact = (name) => {
    fs.readFile('data/contacts.json', 'utf-8', (err, data) => {
        if (err) {
            throw err;
        }
        const contacts = JSON.parse(data);

        const newContacts = contacts.filter((contact) => contact.name.toLowerCase() !== name.toLowerCase())

        if(contacts.length === newContacts.length){
            console.log(chalk.red(`${name} Tidak bisa di hapus karena tidak terdaftar`))
            return false;
        } else {
            fs.writeFile('data/contacts.json', JSON.stringify(newContacts, null, 2), (err) => {
                if(err) throw err;
                console.log(chalk.green(`Data contact ${name} berhasil dihapus`))
            });
        }
    })
}

export {saveContact, listContact, detailContact, deleteContact};