// Mengambil argument

import yargs from "yargs"
import {hideBin} from "yargs/helpers";
import { saveContact, listContact, detailContact, deleteContact } from "./contacts.mjs";

// const command = process.argv[2];
// console.log(yargs(process.argv.slice(2)).argv);
// const command = yargs(hideBin(process.argv)).argv // hideBin digunakan untuk meringkan slice(2)
// console.info(command.email);

const y = yargs()

y.command({
    command: 'add',
    describe: 'Menambah contact baru',
    builder: {
        name: {
            describe: "Nama lengkap",
            demandOption: true,
            type: "string"
        },
        email: {
            describe: "Email",
            demandOption: false,
            type: "string"
        },
        noHP: {
            describe: "Nomor Handphone",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        saveContact(argv.name, argv.email, argv.noHP);
    } 
}).demandCommand();


// Menambpilkan daftar contacts (nama dan nomor handphone)

y.command({
    command: 'list',
    describe: 'Menampilkan semua daftar contact (nama & nomor handphone)',
    handler() {
        listContact();
    }
})

y.command({
    command: 'detail',
    describe: 'Menampilkasn detail contact berdasarkan nama',
    builder: {
        name: {
            describe: "Nama lengkap",
            demandOption: true,
            type: "string"
        },
    },
    handler(argv) {
        detailContact(argv.name)
    }
})

y.command({
    command: 'delete',
    describe: 'Menghapus Contact Berdasarkan Nama',
    builder: {
        name: {
            describe: "Nama lengkap",
            demandOption: true,
            type: "string"
        },
    },
    handler(argv) {
        deleteContact(argv.name)
    }
})


y.parse(hideBin(process.argv));

