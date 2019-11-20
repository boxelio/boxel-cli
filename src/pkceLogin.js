"use strict";

const chalk = require( "chalk" );
const dotenv = require( "dotenv" );
const authClient = require( "./authClient" );
const mkdirp = require('mkdirp');
const fs = require('fs');
const os = require('os');

// read in settings
dotenv.config();

const config = {
 oktaOrgUrl: process.env.OKTA_ORG_URL,
 clientId: process.env.OKTA_CLIENT_ID,
 scopes: process.env.OKTA_SCOPES,
 serverPort: process.env.OKTA_REDIRECT_PORT
};

module.exports = () => {
  const login = () => {
    return new Promise( async ( resolve, reject ) => {
      console.log('Going to log in to BoxelHub...');
      try {
        const auth = authClient( config );
        const { token, userInfo } = await auth.executeAuthFlow();
        console.log( chalk.bold( "You have successfully authenticated your CLI application to BoxelHub!" ) );
        const boxelDir = os.homedir() + '/.boxel';
        mkdirp(boxelDir, function(err) {
          const boxelHub = {
            token: token,
            userInfo: userInfo
          };
          try {
            fs.writeFileSync(boxelDir + '/hub', JSON.stringify(boxelHub));
          } catch (err) {
            console.error(err);
          }
        });
      } catch ( err ) {
        console.log( chalk.red( err ) );
      }
    });
  };

  return {
    login
  };
}
