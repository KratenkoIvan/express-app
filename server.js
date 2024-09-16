const moment = require('moment');
const express = require('express');

const app = express();
const PORT = 8000
const HOST = 'localhost'
function getDate(){
    console.log(moment().format('YYYY/DD/MM HH:mm:ss'))
}

app.get('/date', () => {
    getDate()
})

app.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}/`);
});