// Require
const express = require('express');

// Setup
const app = express();
const port = 3000;
app.listen(port, () => {
    console.log(`Abucom developer | listening at http://127.0.0.1:${port}`);
});

