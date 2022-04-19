import {Router} from 'express';
import DeviceController from '../controllers/deviceController.js';
const router = new Router();

router.get('/', DeviceController.getAll)
router.post('/', DeviceController.addDevice)
router.get('/:id', DeviceController.getById);


export default router;