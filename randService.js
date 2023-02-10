const express = require('express');
const bodyParser = require('body-parser');

// Create an instance of express
const app = express();

// Use the body-parser middleware to parse JSON data in the request body
app.use(bodyParser.json());

const data = [
    {'id': 1630173, 'full_name': 'Precious Achiuwa', 'first_name': 'Precious', 'last_name': 'Achiuwa', 'is_active': true},
    {'id': 203500, 'full_name': 'Steven Adams', 'first_name': 'Steven', 'last_name': 'Adams', 'is_active': true}
  ];

// Define an endpoint for the POST request
app.post('/random-select', (req, res) => {
  // Get the JSON data from the request body
  const data = req.body;

  // Select a random element from the data array
  const randomIndex = Math.floor(Math.random() * data.length);
  const selectedData = data[randomIndex];

  // Send the 'full_name' from the selected data as a response
  res.send(selectedData.full_name);
});

// Start the microservice on port 5001
app.listen(5001, () => {
  console.log('Microservice listening on port 5001');
});