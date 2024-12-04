
const express = require('express')

const app = express();

app.get('/users', (req, res) => {
    console.log(req.url + req.method)
    res.send('<h1>Hello Atul!</h1>');
})

app.listen(3030, () => {
    console.log('Server is running on port 3030');
})