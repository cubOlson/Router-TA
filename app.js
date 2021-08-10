const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.send('Hello from Express!')
});

app.get('/capital-letters/:value', (req, res) => {
    let { value } = req.params
    value = value.toUpperCase();
    res.send(`${value}`);
});

app.get('/bio', (req, res) => {
    res.send("Bio");
});

app.get(/\/marg[oteaux]+\/bio/, (req, res) => {
    res.send("Bio");
});

app.get('/contact', (req, res) => {
    res.send("Contact");
});

app.get(/\/marg[oteaux]+\/contact/, (req, res) => {
    res.send("Contact");
});

app.get(/.*xyz$/, (req, res) => {
    res.send("That's all I wrote.");
});

app.get('/about/foo', (req, res) => {
    res.status(404).send('Not found');
})

app.all(/\/\w+/, (req, res) => {
    const random = Math.round(Math.random() * 10);

    res.render('test', { method: req.method, path: req.path, random })
});

const port = 8081;

app.listen(port, () => console.log(`Listening on port ${port}...`));