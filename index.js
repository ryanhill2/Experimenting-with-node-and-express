const express = require('express')
const app = express()
const script = require('./testScript')

app.get('/', (req, res) => {
    script.myFunFunction()
    res.send('Hello World')
});

app.listen(3000, console.log('App Listening to port 3000'))