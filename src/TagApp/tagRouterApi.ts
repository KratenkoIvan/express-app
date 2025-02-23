import {Router} from "express"
import tagControllerApi from "./tagControllerApi"

const router = Router()

router.get('/all', tagControllerApi.getAllTags)


export default router