import fs from "fs";

const dirPath = './data'

if(!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

const dataPath = './data/contacts.json'
if(!fs.existsSync(dataPath)){
    fs.writeFileSync(dataPath, '[]', 'utf-8');
}

// Mengambil data di contacts.json
const listContact = () => {
    const buffer = fs.readFileSync('data/contacts.json', 'utf-8');
    const contacts = JSON.parse(buffer);
    return contacts;
};

// Mencari Contact berdasarkan nama
const findContact = (name) => {
    const contacts = listContact();
    const contact = contacts.find((contact) => contact.name === name);
    return contact
}

export {listContact, findContact}