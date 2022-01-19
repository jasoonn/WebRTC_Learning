const express = require('express')
const path = require('path');
const app = express();
app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname+'/index.html'));
});
app.get('/client.js', (request, response) => {
    response.sendFile(path.join(__dirname+'/client.js'));
});

app.listen(8080, console.log('App Listening to port 8080'))