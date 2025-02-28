import express, { Express, Request, Response } from 'express'
import path from 'path'
import cors from 'cors'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import {postRouter} from './PostApp/postRouter'
import { commentRouter } from './CommentApp/commentRouter'
import userRouter from './UserApp/userRouter'
import postRouterApi from './PostApp/postRouterApi'
import tagRouterApi from './TagApp/tagRouterApi'
import userRouterApi from './UserApp/userRouterApi'

dotenv.config()

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
app.use('/api/tag/', tagRouterApi)
app.use('/api/user/', userRouterApi)
app.use('/', userRouter)

app.get('/', (req: Request, res: Response) => {
    res.render('index')
})

app.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}/`)
});