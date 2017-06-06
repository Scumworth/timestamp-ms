const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const dateMaker = require('./utils/date-maker');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/:id', (req, res, next) => {
    const formattedDate = dateMaker.makeDate(req.params.id)
    console.log(formattedDate);
    res.send(formattedDate);
    next();
})

app.listen(port, function(){
    console.log('App is up on port 3000')
});

