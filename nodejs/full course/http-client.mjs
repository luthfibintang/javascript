import https from "https";

const url = "https://hookb.in/kxXqJDnem9hBjzggWLBe";
const request = https.request(url, {
    method: "POST",
    headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json"
    }
}, (response) => {
    response.on("data", (data) => {
        console.log(`Receive data : ${data}`);
    })
});

const body = JSON.stringify({
    firstName: "Azisya",
    lastName: "Bintang"
})

request.write(body);
request.end();