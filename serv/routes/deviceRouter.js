import {Router} from 'express';
import DeviceController from '../controllers/deviceController.js';
import checkRoleMiddleware from '../middleware/checkRoleMiddleware.js';
const router = new Router();

router.get('/', DeviceController.getAll)
router.post('/', checkRoleMiddleware('ADMIN'), DeviceController.addDevice)
router.get('/:id', DeviceController.getById);


export default router;