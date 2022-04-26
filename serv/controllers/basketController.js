import { basketDevice } from "../models/models.js";
import { device, brand } from "../models/models.js";
class BasketController {
    async addDeviceIntoBasket(req, res) {
        let {deviceId, basketId, amount} = req.body;
        if (!amount) {
            amount = 1;
        }
        
        console.log('deviceId, basketId', deviceId, basketId);
        let basketobj = await basketDevice.findOne({where: {deviceId, basketId}});
        console.log('findOnebasket', basketobj);
        if (basketobj) {
            let oldamount = basketobj.amount;
            console.log('oldamount', oldamount);
            basketobj = await basketDevice.update({amount: oldamount + 1},{where: {basketId: basketobj.basketId, deviceId: basketobj.deviceId}});
            console.log('updated', basketobj);
        }
        else
            basketobj = await basketDevice.create({deviceId, basketId, amount});
        return res.json(basketobj);
    }

    async removeDeviceFromBasket(req, res) {
        const {deviceId, basketId} = req.body;
        const basketobj = await basketDevice.destroy({where: {deviceId, basketId}});
        return res.json(basketobj);
    }

    async getById(req, res) {
        const {id} = req.query;
        const basketobj = await basketDevice.findAndCountAll({
            where: {basketId: id},
            include: [
                {
                    model: device,
                    include: [
                        {
                            model: brand
                        }
                    ]
                }
        ]
        });
        return res.json(basketobj);
    }
}

export default new BasketController();