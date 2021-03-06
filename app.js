// Require
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const reload = require('reload');

// Setup
const app = express();
const port = 3000;
app.listen(port, () => {
    console.log(`Abucom developer | listening at http://127.0.0.1:${port}`);
});
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.static('public'));
reload(app);

// roouting halaman index.ejs
app.get('/', (req, res) => {
    res.render('index', {layout: 'layouts/main-layout', title: 'Abucom'});
});

