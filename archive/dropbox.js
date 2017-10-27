const dbxToken = '8RGRdcAz4zsAAAAAAAAJvjEQIi7b4joLd_oMB1ipqu59ufSoDEZGYp_J9KXEkF82'
const dropbox = require('dropbox');
var main = require('./app.js')

var listner2 = function listner1() {
    console.log('listner2 executed.');
}

function setup() {
    console.log('setup called', main.eventEmitter)
    // main.addListener('newFile', listner2)
    main.on('newFile', listner2)
}

module.exports = {
    setup
}


// .addListener('newFile', listner2);











// setup Dropbox API
// var dbx = new dropbox({ accessToken:dbxToken });

// console.log('dropbox init')

// function saveToDropbox(i,f){
//     console.log('file save to dropbox')
//     fs.readFile(
//         path.join(i, f), 
//         (err, contents) => {
//             dbx.filesUpload(
//                 {
//                     path: '/' + f, 
//                     contents: contents
//                 }
//             ).then(
//                 (r) => {
//                     console.log(r);
//                 }
//             )
//         }
//     )
// }

// function subscribe(){
//     // listen for dropbox upload
//     emitNewFile.on(
//         'newFile', 
//         saveToDropbox
//     )

// }
