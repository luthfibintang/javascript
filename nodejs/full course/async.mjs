function samplePromise(){
    return Promise.resolve("Bintang");
}

const name = await samplePromise();
console.info(name);