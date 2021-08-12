const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
const port = process.env.PORT || 3003;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);

app.get('/', (req, res) => {
    res.send('hello world')
});

app.listen(port, () => { console.log(`Listening to port ${port}!!`) });