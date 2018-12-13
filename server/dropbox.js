import fetch from 'isomorphic-fetch';
import {Dropbox as Dbx} from 'dropbox';
import fs from 'fs';
import EventEmitter from 'events';

const clientID = '4210jna60uh85i9';

export class Dropbox {
  constructor(filePath) {
    this.filePath = filePath;

    this.emitter = new EventEmitter();
    this.dbx = new Dbx({clientId: clientID, fetch: fetch});

    this.status = 'not-auth';
    this.name = '';
    this.email = '';
  }
  setAccessToken(_token) {
    this.dbx.setAccessToken(_token);
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
          token: _token,
        });
      })
      .catch((r) => {
        this.emitter.emit('dropbox-login-failure');
      });
  }
  newPicture(imgFile) {
    if (this.status == 'auth') {
      let file = fs.readFileSync(this.filePath + '/' + imgFile);
      this.dbx
        .filesUpload({path: `/test_folder/${imgFile}`, contents: file})
        .then((response) => {
          this.emitter.emit('dropbox-upload-success', response);
          this.dbx
            .sharingCreateSharedLinkWithSettings({path: response.path_lower})
            .then(
              (response) => {
                this.emitter.emit('dropbox-url', response.url);
              },
              (reason) => {
                console.log(
                  'dropbox get sharing url fail',
                  reason.error.error_summary
                );
              }
            );
        })
        .catch((r) => {
          console.log('dropbox - upload error');
        });
    } else {
      console.log('dropbox - unable to upload picture - not authenticated');
    }
  }
  getLoginUrl() {
    return this.dbx.getAuthenticationUrl(
      'http://localhost:3000/dropbox',
      'response_type=code'
    );
  }
  getAuthStatus() {
    return {status: this.status, name: this.name, email: this.email};
  }
}
