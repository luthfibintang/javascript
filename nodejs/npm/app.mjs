import validator from "validator";
import chalk from 'chalk';

// const email = validator.isEmail('bintang@gmail.com') // true
// const notEmail = validator.isEmail('bintanggmail.com') // false
// const notEmail2 = validator.isEmail('luthfibintang@gmail.c') // false
// const email2 = validator.isEmail('bintang@gmail.co') // true

// const noHP = validator.isMobilePhone('0821313121', 'id-ID'); // true
// console.log(noHP);

// const num = validator.isNumeric('1131313132a'); // false
// console.log(num);

const log = console.log

log(chalk.blueBright.italic.bgGrey('Hello') + "world" + chalk.red.bgWhite("!"))