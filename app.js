const http = require('http')
const fs = require('fs')
const path = require('path')
const port = 3000

const renderHTML = (path, res) => {
    fs.readFile(path, (e, data) => {
        if (e) {
            res.writeHead(404)
            res.write('404 - File not found!!')
        }else{
            res.write(data);
        }
        res.end()
    })
}

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })
    const url = req.url
    switch (url) {
        case '/login':
            renderHTML('./view/login.html', res)
            break;
        default:
            renderHTML('./view/index.html', res)
            break;
    }
}).listen(port, () => {
    console.log(`Server is listening on port ${port}..`);
})