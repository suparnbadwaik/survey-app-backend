const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({test:'Hello'});
});

const PORT = process.env.port || 5000;
app.listen(PORT, () => {
    console.log('App Started');
})