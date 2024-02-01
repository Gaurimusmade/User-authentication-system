const mongoose = require('mongoose');

const database = process.env.DB_DATABASE || 'siddi-vinayaka';
const host = process.env.DB_HOST || '127.0.0.1';
const url = process.env.URL || `mongodb://${host}/${database}`;

module.exports = mongoose.connect(url).then(() => {
    console.log('Connected to database');
}).catch((err) => {
    console.error('Error connecting to database:', err);
})