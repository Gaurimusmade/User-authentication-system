const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const methodOverride=require('method-override');
app.use(methodOverride('_method'));

const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

app.get('/', (req, res) => { 
    res.status(200).json({ message: "Welcome Siddi Vinayaka" });
});

app.use('*', (req, res) => {
    res.status(404).json({ error: "Page not found" });
})

let Port = process.env.PORT || 5000;
app.listen(Port, () => {
    console.log(`Server running on port ${Port}`);
})