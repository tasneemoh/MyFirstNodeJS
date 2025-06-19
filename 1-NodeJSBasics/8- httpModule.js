


const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
         res.end('Welcome in our home page')
    }

    else if(req.url === '/about'){
        res.end(`<h1 align="center">Tasneem Mohammed Abu Oudah </h1>
            <h2 align="center">Sr Sofware Developer<h2>`)
    }
    else{
        res.end(`<h1> Oooops </h1>
            <p> The page not found </p>
            <a href="/"> Back home</a>`)
    }
})

server.listen('3000')