export const environment = {
  appVersion: require('../../package.json').version,
  production: true,
  uaaServiceOrigin: window['env']['uaaServiceOrigin'] ||  '',
  uaaServicePort: window['env']['uaaServicePort'] ||  '',
  uaaServiceAdminClientID: window['env']['uaaServiceAdminClientID'] || '',
  uaaServiceAdminClientSecret: window['env']['uaaServiceAdminClientSecret'] || '' ,
  paUser: window['env']["paUser"] || '',
  paPW: window['env']['paPW'] || '',
};
