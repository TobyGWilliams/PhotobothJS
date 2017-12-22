const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();

var Server = function(emitter, filepath){
        this.filepath = filepath
        this.emitter = emitter
        console.log(this)

        // Parsers for POST data
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: false }));
    
        // Point static path to dist
        app.use(express.static(path.join(__dirname, '../dist')));

        app.get('/picture/img*.jpg', (req, res) => {
            var fileName = req.path.match('/picture/(.*)')[1]
            res.sendFile(path.join(this.filepath, fileName));
        });

        // app.get('/dropbox*', (req, res)=>{
        //     console.log(req.query.code)
        //     res.redirect('/home')
        //     this.emitter.emit('server-dropboxToken', req.query.code)
        // })


        // Catch all other routes and return the index file
        app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, '../dist/index.html'));
        });
    
       
        this.port = process.env.PORT || '3000';  //Get port from environment and store in Express.
        app.set('port', this.port);
        this.server = http.createServer(app); // * Create HTTP server.
        this.serv = this.server.listen(this.port, () => console.log(`API running on localhost:${this.port}`));  //Listen on provided port, on all network interfaces.
}

Server.prototype.server = function(){
    return this.serv
}

module.exports = Server

