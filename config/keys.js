// clientid
// 132441067562-qrfjanahl7asocl6edifbvs7nv8rvj8e.apps.googleusercontent.com
// Client-secret
// P1dTMCRKlgG6WAOMWxWAtOJR

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./prod');
} else {
  // we are in dev mode return dec keys
  module.exports = require('./dev');
}
