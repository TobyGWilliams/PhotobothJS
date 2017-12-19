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

        app.get('/dropbox*', (req, res)=>{
            console.log(req.originalUrl, req.params, req.query, req.baseUrl, req.headers, req.cookies)
            console.log(req.query)
            console.log('----------------------------')
            res.redirect('/home')

        })

//https://www.dropbox.com/oauth2/authorize?response_type=token&client_id=4210jna60uh85i9&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Adropbox?
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

