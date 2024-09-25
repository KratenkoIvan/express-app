const moment = require('moment')
const express = require('express')
const path = require('path')

const app = express()
const PORT = 8000
const HOST = 'localhost'

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'templates'))

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

app.get('/posts', (req, res) => {
    const context = {
        posts: [{name: 'post1', author: 'Author1 '}, {name: 'post2', author: 'Author2'}, {name: 'post3', author: 'Author3'}, {name: 'post4', author: 'Author4'}]
    }

    res.render('posts', context)
})

app.get('/user/', (req, res) => {
    res.render('user')
})
app.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}/`)
});