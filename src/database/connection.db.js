const mongoose = require('mongoose');
require('dotenv/config');

const uri = process.env.MONGODB_URL;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('MongoDB conectado!')
  })
  .catch(err => console.log(err))

module.exports = mongoose;