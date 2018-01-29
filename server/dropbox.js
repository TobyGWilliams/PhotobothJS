const Dbx = require('dropbox');
const fs = require('fs');

const clientID = '4210jna60uh85i9';

let Dropbox = function(emitter) {
  this.emitter = emitter;

  this.status = 'not-auth';
  this.name = '';
  this.email = '';

  this.dbx = new Dbx();
  this.dbx.setClientId(clientID);

  this.emitter.on('config-get', ()=>{
    this.emitter.emit('dropbox-authUrl', this.dbx.getAuthenticationUrl('http://localhost:3000/dropbox', 'response_type=code'));
    this.emitter.emit('dropbox-authStatus', {
      status: this.status,
      name: this.name,
      email: this.email,
    });
  });

  this.emitter.on('camera-new-picture', (e)=> {
    if (this.status == 'auth') {
      let file = fs.readFileSync(e);
      this.dbx.filesUpload({path: '/test_folder/filename.jpg', contents: file})
      .then((r) => {
        this.emitter.emit('dropbox-upload-success');
      }).catch((r)=>{
        console.log('dropbox - unable to upload picture');
      });
    } else {
      console.log('dropbox - unable to upload picture');
    }
  });

  this.emitter.on('dropbox-token', (e) =>{
    if (e.match('access_token=(.*?)\&') != null) {
      const token = e.match('access_token=(.*?)\&')[1];
      this.dbx.setAccessToken(token);
      this.dbx.usersGetCurrentAccount()
      .then((r)=>{
          console.log('dropbox-login-success', r.name.display_name, r.email);
          this.status = 'auth';
          this.email = r.email;
          this.name = r.name.display_name;

          this.emitter.emit('dropbox-login-success', {
            status: this.status,
            name: this.name,
            email: this.email,
          });
        })
        .catch((r)=>{
          console.log('dropbox-login-failure');
        }
      );
    } else {
      console.log('no token found');
    }
  });
};

module.exports = Dropbox;
