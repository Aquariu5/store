import {Router} from 'express';
import typeController from '../controllers/typeController.js';
import checkRoleMiddleware from '../middleware/checkRoleMiddleware.js';
const router = new Router();

router.get('/', typeController.getAll);
router.post('/', checkRoleMiddleware('ADMIN'), typeController.addType);

export default router;