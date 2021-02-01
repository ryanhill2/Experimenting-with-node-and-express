const express = require('express')
const app = express()
let script = ('./testScript.js')
app.get('/', (req, res) => {
    script()
    res.send('Hello World')
});

app.listen(3000, console.log('App Listening to port 3000'))