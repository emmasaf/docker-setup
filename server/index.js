const express = require('express');
const cors = require('cors'); // Import CORS
const app = express();
const port = process.env.SERVER_PORT || 3001;

const items = ['apple', 'banana', 'cherry'];

app.use(cors()); // Enable CORS for all routes

app.get('/', (req, res) => {
  res.json(items);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});



//npm init -y
//npm install express
//node index.js
