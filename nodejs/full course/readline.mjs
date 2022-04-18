import process from "process";
import readline from "readline";


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Siapa nama anda?", (name) => {
    console.info(`Hello ${name}`);
    rl.close();
})