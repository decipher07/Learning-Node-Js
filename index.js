const http = require ('http');
const path = require ('path');
const fs = require ('fs');

const server = http.createServer((req,res) => {
    // if (req.url === '/'){
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'),(err,content) => {
    //         if (err) throw err ;
    //         res.writeHead(200, {'Contect-Type': 'text/html'});
    //         res.end(content);
    //     })
    // }

    // if (req.url === '/api/users'){
    //     const users = [
    //         { name :'Bob Smith' , age : 30 },
    //         {
    //             name : 'John Doe', age : 40 
    //         }
    //     ];
    //     res.writeHead(200, { 'Content-Type': 'application/json' });
    //     res.end(JSON.stringify(users));


    // }

    // // if (req.url === '/about'){
    // //     fs.readFile(path.join(__dirname, 'public', 'about.html'),(err,content) => {
    // //         if (err) throw err ;
    // //         res.writeHead(200, {'Contect-Type': 'text/html'});
    // //         res.end(content);
    // //     })
    // // }

    // Build File Path
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
    // console.log(filePath);
    // res.end();

    //Extension Of File 
    let extname = path.extname(filePath);

    // Initial Content Type 
    let contentType = 'text/html';

    // Check ext and set content type 
    switch(extname){
        
    }

});

const PORT = process.env.PORT || 5000 ;

server.listen(PORT, () => console.log(`Server Running on Port ${PORT}`));
