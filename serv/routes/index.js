import { Router } from "express";
import basketRouter from './basketRouter.js';
import brandRouter from './brandRouter.js';
import userRouter from './userRouter.js';
import deviceRouter from './deviceRouter.js';
import typeRouter from './typeRouter.js'
const router = new Router();

router.use('/basket', basketRouter)
router.use('/user', userRouter)
router.use('/device', deviceRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)

export default router;