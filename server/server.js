const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();

var Server = function(f){
        var self = {
            filepath: f
        }
        console.log(self)

        // Parsers for POST data
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: false }));
    
        // Point static path to dist
        app.use(express.static(path.join(__dirname, '../dist')));

        app.get('/picture/img*.jpg', (req, res) => {
            var fileName = req.path.match('/picture/(.*)')[1]
            res.sendFile(path.join(self.filepath, fileName));
        });


        // Catch all other routes and return the index file
        app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, '../dist/index.html'));
        });
    
        //Get port from environment and store in Express.
        this.port = process.env.PORT || '3000';
        app.set('port', this.port);
    
        // * Create HTTP server.
        this.server = http.createServer(app);
    
        //Listen on provided port, on all network interfaces.
        this.serv = this.server.listen(this.port, () => console.log(`API running on localhost:${this.port}`));
}

Server.prototype.server = function(){
    return this.serv
}

module.exports = Server

