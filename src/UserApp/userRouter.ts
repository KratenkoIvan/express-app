import userController from './userController';
import express, {Router} from 'express';

const router: Router = express.Router();

router.get('/login', userController.login)
router.get('/register', userController.register)

router.post('/login', userController.authLogin)
router.post('/register', userController.authRegister)

export default router;