const express = require('express');
// Import Body parser
let bodyParser = require('body-parser');
// Import Mongoose
let mongoose = require('mongoose');
const dotenv		= require('dotenv');
require('dotenv').config();
const dbUrl = process.env.MONGO_URI;

const app = express();

// Connect to database
// Connect to Mongoose and set connection variable
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true});

mongoose.Promise = global.Promise;
mongoose.connection
  .on('connected', () => {
    console.log(`Mongoose connection open on ${dbUrl}`);
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
  });

// Setup server port
const PORT = process.env.PORT || 5000;

// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));

// Import routes
let apiRoutes = require("./api-routes");

// testing app
app.get('/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'Delphine', lastName: 'Cormier'},
    {id: 2, firstName: 'Aurora', lastName: 'Luft'},
    {id: 3, firstName: 'Isabelle', lastName: 'Desbiens'},
  ];

  res.json(customers);
});

app.get('/programs', (req, res) => {
  const name = req.query.name || 'programs';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ saludo: `Greetings ${name}!` }));
});

// Use Api routes in the App
app.use('/api', apiRoutes);

// Launch app to listen to specified port
app.listen(PORT, () => `Server running on port ${PORT}`);