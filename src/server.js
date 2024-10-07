const moment = require('moment')
const express = require('express')
const path = require('path')
const postRouter = require('./routers/postRouter')

const app = express()
const PORT = 8000
const HOST = 'localhost'

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'templates'))

app.use('/static/', express.static(path.join(__dirname, 'static')))
app.use(express.json())
app.use('/post/', postRouter)

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}/`)
});