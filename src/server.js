const moment = require('moment')
const express = require('express')
const path = require('path')

const app = express()
const PORT = 8000
const HOST = 'localhost'

app.use('/static/', express.static(path.join(__dirname, 'static')))
function getDate(){
    console.log(moment().format('YYYY/DD/MM HH:mm:ss'))
}

app.get('/date', () => {
    getDate()
})

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './templates/index.html'))
})

app.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}/`)
});