const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const companies = require('./routes/companies');
const express = require('express');
const hax = express();

mongoose.connect(process.env.DB_CONNECTION,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected to Mongodb'))
.catch(err => console.log('Error connecting to Mongodb', err));

hax.use(express.json());
hax.use('/api/companies', companies);
hax.set('view engine', 'pug');
hax.set('views', './views');
const port = process.env.PORT || 3000;

hax.listen(port, () => console.log(`Listening on port ${port}...`));