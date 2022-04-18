import fs from "fs";
import http from "http";


const server = http.createServer((req, res) => {
    const url = req.url;
    res.writeHead(200, {'Content-Type' : 'text/html'});
    const renderHTML = (path, res) => {
        fs.readFile(path, (err, data) => {
            if (err){
                res.writeHead(404)
                res.write("File Not Found")
            }

            res.write(data);
            res.end();
        })
    }

    // Pakai Swtich
    switch (url) {
        case '/about':
            renderHTML('./about.html', res);
            break;
        case '/contact':
            renderHTML('./contact.html',res);
            break;
        default:
            renderHTML('./index.html', res);
            break;
    }

    // Pakai if & else
    // if(url === '/about'){
    //     renderHTML('./about.html', res);
    // } else if (url === '/contact'){
    //     renderHTML('./contact.html', res);
    // } else {
    //     renderHTML('./index.html', res);
    // }
})

server.listen(3000, () => {
    console.log("Server is listening on port 3000");
});