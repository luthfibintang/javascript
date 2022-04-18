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

// Menulikan / menimpa file contacts.json dengan data yang baru
const saveContacts = (contact) => {
    fs.writeFileSync('data/contacts.json', JSON.stringify(contact, null, 2));
}

// Menambahkan data contact baru
const addContact = (contact) => {
    const contacts = listContact();
    contacts.push(contact);
    saveContacts(contacts);
}

// Duplicate Contact
const checkDuplicate = (name) => {
    const contacts = listContact();
    return contacts.find((contact) => contact.name === name);
}

// Hapus Contact
const deleteContact = (name) => {
    const contacts = listContact();
    const filteredContacts = contacts.filter((contact) => contact.name !== name)
    saveContacts(filteredContacts);
}

const updateContact = (newContact) => {
    const contacts = listContact();
    // Hilangkan contact nama yang namanya sama dengan old name
    const filteredContacts = contacts.filter((contact) => contact.name !== newContact.oldName);
    delete newContact.oldName;
    filteredContacts.push(newContact);
    saveContacts(filteredContacts);
} 

export {listContact, findContact, addContact, checkDuplicate, deleteContact, updateContact}