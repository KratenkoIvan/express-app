import { authTokenMiddleware } from '../middlewares/authTokenMiddleware';
import userControllerApi from './userControllerApi';
import express, {Router} from 'express';

const router: Router = express.Router();

router.post('/login', userControllerApi.authLogin)
router.post('/register', userControllerApi.authRegister)
router.get('/me', authTokenMiddleware, userControllerApi.getUserById)

export default router;