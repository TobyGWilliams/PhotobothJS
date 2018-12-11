/* eslint-env node */
import Dbx from 'dropbox';
import fs from 'fs';
import EventEmitter from 'events';

const clientID = '4210jna60uh85i9';

function Dropbox() {
  this.emitter = new EventEmitter();

  this.status = 'not-auth';
  this.name = '';
  this.email = '';

  this.dbx = new Dbx();
  this.dbx.setClientId(clientID);

  this.emitter.on('config-get', () => {
    this.emitter.emit(
      'dropbox-authUrl',
      this.dbx.getAuthenticationUrl(
        'http://localhost:3000/dropbox',
        'response_type=code'
      )
    );
    this.emitter.emit('dropbox-authStatus', {
      status: this.status,
      name: this.name,
      email: this.email,
    });
  });

  this.emitter.on('dropbox-new-picture', (e) => {
    if (this.status == 'auth') {
      let file = fs.readFileSync(e);
      this.dbx
        .filesUpload({path: '/test_folder/filename.jpg', contents: file})
        .then((r) => {
          this.emitter.emit('dropbox-upload-success');
          this.dbx.sharingCreateSharedLink({path: r.path_lower}).then((r) => {
            this.emitter.emit('dropbox-url', r.url);
          });
        })
        .catch((r) => {
          this.emitter.emit('dropbox-upload-failure');
        });
    } else {
      console.log('dropbox - unable to upload picture');
    }
  });

  this.emitter.on('dropbox-token', (e) => {
    if (e.match('access_token=(.*?)&') != null) {
      const token = e.match('access_token=(.*?)&')[1];
      this.dbx.setAccessToken(token);
      this.dbx
        .usersGetCurrentAccount()
        .then((r) => {
          this.status = 'auth';
          this.email = r.email;
          this.name = r.name.display_name;

          this.emitter.emit('dropbox-login-success', {
            status: this.status,
            name: this.name,
            email: this.email,
          });
        })
        .catch((r) => {
          console.log('dropbox-login-failure');
        });
    } else {
      console.log('no token found');
    }
  });
}

module.exports = Dropbox;
