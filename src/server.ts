import express, { Express, Request, Response } from 'express'
import path from 'path'
import {postRouter} from './PostApp/postRouter'
import userRouter from './UserApp/userRouter'
import cookieParser from 'cookie-parser'
import { commentRouter } from './CommentApp/commentRouter'
import postRouterApi from './PostApp/postRouterApi'
import cors from 'cors'

const app: Express = express()
const PORT = 8000
const HOST = 'localhost'

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'templates'))


app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: ['http://localhost:3000']
}))

app.use('/static/', express.static(path.join(__dirname, 'static')))
app.use('/post/', postRouter)
app.use('/comment/', commentRouter)
app.use('/api/post/', postRouterApi)
app.use('/', userRouter)

app.get('/', (req: Request, res: Response) => {
    res.render('index')
})

app.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}/`)
});