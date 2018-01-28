const express = require('express');
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');
passportConfig = require('./services/passport');
const authRoutes = require('./routes/authRoutes');
const keys = require('./config/keys');

mongoose.connect(keys.mongoURI);
const app = express();

authRoutes(app);

// app.get('/', (req, res) => {
//   res.send({ hi: 'there' });
// });

app.listen(PORT, () => {
  console.log('Server started on port 5000');
});
