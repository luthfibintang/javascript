const buffer = Buffer.from("Azisya Luthfi Bintang", "utf-8");

console.info(buffer.toString());
console.log(buffer.toString("hex"));
console.log(buffer.toString("base64"))

const bufferBase64 = Buffer.from("QXppc3lhIEx1dGhmaSBCaW50YW5n", "base64")
console.log(bufferBase64.toString("utf-8"));