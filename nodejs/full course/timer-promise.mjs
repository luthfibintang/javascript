import timers from "timers/promises"

// console.log(new Date())
// const name = await timers.setTimeout(3000, "Bintang");
// console.log(new Date());
// console.log(name)

for await (const startTime of timers.setInterval(100, Date.now())){
    const now = Date.now()
    console.log(`Start Time at ${startTime}`);
    console.log(`Now is ${now}`)

    if((now - startTime) > 1000) break;
}