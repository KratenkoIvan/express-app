import userControllerApi from './userControllerApi';
import express, {Router} from 'express';

const router: Router = express.Router();

router.post('/login', userControllerApi.authLogin)
router.post('/register', userControllerApi.authRegister)

export default router;