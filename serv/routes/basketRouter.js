import {Router} from 'express';
import basketController from '../controllers/basketController.js';
const router = new Router();

router.get('/', basketController.getById);
router.post('/',basketController.addDeviceIntoBasket);
router.delete('/', basketController.removeDeviceFromBasket);

export default router;