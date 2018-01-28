// clientid
// 132441067562-qrfjanahl7asocl6edifbvs7nv8rvj8e.apps.googleusercontent.com
// Client-secret
// P1dTMCRKlgG6WAOMWxWAtOJR

if (process.env.NODE_ENV === 'production') {
  console.log('PROD');
  module.exports = require('./prod');
} else {
  if (process.env.NODE_ENV === 'development') {
    // we are in dev mode return dec keys
    console.log('DEV');
    module.exports = require('./dev');
  }
}
