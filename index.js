const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Pagina inicial'));

app.get('/oi', (req, res) => res.send('OIIII'));


const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));
