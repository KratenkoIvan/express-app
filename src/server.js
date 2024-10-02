const moment = require('moment')
const express = require('express')
const path = require('path')

const app = express()
const PORT = 8000
const HOST = 'localhost'
const posts = [
    {
        'name': 'name1',
        'description': 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        'time': '11.09.2001',
        'author': 'author1',
    },
    {
        'name': 'name2',
        'description': 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        'time': '11.09.2001',
        'author': 'author2',
    },
    {
        'name': 'name3',
        'description': 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        'time': '11.09.2001',
        'author': 'author3',
    },
    {
        'name': 'name4',
        'description': 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        'time': '11.09.2001',
        'author': 'author4',
    },
    {
        'name': 'name5',
        'description': 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        'time': '11.09.2001',
        'author': 'author5',
    }
]
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'templates'))

app.use('/static/', express.static(path.join(__dirname, 'static')))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './templates/index.html'))
})

app.get('/posts', (req, res) => {
    const context = {
        posts: posts
    }

    res.render('posts', context)
})

app.get('/user/', (req, res) => {
    res.render('user')
})

app.get('/post/:id', (req, res) => {
    const id = req.params.id
    const context = {
        post: posts[id - 1]
    }
    if (id <= posts.length && id > 0){
        res.render('post', context)
    } else{
        res.render('error')
    }

    
})

app.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}/`)
});