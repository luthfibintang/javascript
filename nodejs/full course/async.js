function samplePromise(){
    return Promise.resolve("Bintang");
}

async function run(){
    const name = await samplePromise();
    console.info(name);
}

run();