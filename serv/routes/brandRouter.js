import {Router} from 'express';
import brandContoller from '../controllers/brandContoller.js';
const router = new Router();

router.get('/', brandContoller.getAll)
router.post('/', brandContoller.addBrand)

export default router;