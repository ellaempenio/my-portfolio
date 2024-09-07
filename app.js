const express = require('express');
const app = express();

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Serve static files (like CSS and images)
app.use(express.static('public'));

// Home route
app.get('/', (req, res) => {
    res.render('index');
});

// About route
app.get('/about', (req, res) => {
    res.render('about');
});

// Contact route
app.get('/contact', (req, res) => {
    res.render('contact');
});

// Hobbies route
app.get('/hobbies', (req, res) => {
    res.render('hobbies');
});

// Projects route
app.get('/projects', (req, res) => {
    res.render('projects');
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
