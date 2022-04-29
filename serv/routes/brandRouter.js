import {Router} from 'express';
import brandContoller from '../controllers/brandContoller.js';
import checkRoleMiddleware from '../middleware/checkRoleMiddleware.js';
const router = new Router();

router.get('/', brandContoller.getAll)
router.post('/', checkRoleMiddleware('ADMIN'), brandContoller.addBrand)

export default router;