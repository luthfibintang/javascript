import fs from "fs";

// Menulis
const writer = fs.createWriteStream("target.log");

writer.write("Azisya\n")
writer.write("Luthfi\n")
writer.write("Bintang\n")
writer.end();

// Membaca

const reader = fs.createReadStream("target.log");
reader.addListener("data", (data) => {
    console.log(data.toString());
})

