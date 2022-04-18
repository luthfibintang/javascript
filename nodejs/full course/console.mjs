import { Console } from "console";
import fs from "fs";

const file = fs.createWriteStream("application.log");

const kon = new Console({
    stdout: file,
    stderr: file
})


const person = {
    firstName: "Ardhie",
    lastName: "Firdaus"
}
kon.log(`Hello ${person.firstName}`)
kon.error(`Hello ${person.lastName}`)

kon.table(person);
