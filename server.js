const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('dist'));

app.get('/', (req, res) => res.sendFile(path.resolve('dist', 'main.html')));

app.listen(PORT, () => {
    console.log(`Portfolio listening on http://localhost:${PORT}`);
});