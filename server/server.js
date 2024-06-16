const express = require('express');
const path = require('path');
var app = express();
var server = app.listen(5000,()=>{
    console.log('listening on port on 5000');
});
const io = require('socket.io')(server);
app.use(express.static(path.join(__dirname,'/client/src/App.js')));
