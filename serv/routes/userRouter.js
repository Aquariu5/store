import {Router} from 'express';
import userController from '../controllers/userController.js';
import authMiddleware from '../middleware/authMiddleware.js';
const router = new Router();

router.get('/auth',authMiddleware, userController.check);
router.post('/login', userController.login);
router.post('/registration', userController.registration)
router.post('/')

export default router;