const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://127.0.0.1:27017/accodal', { useNewUrlParser: true })
.then(()=> console.log('DB connected'))
.catch( err => console.log('DB error connection: ', err));

module.exports = mongoose;
module.exports.Schema = Schema;