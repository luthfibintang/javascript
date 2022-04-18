import dns from "dns/promises";

const ip = await dns.lookup("www.youtube.com")

console.log(ip.address);
console.log(ip.family);