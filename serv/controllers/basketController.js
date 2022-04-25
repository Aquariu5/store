import { basketDevice } from "../models/models.js";
import { device, brand } from "../models/models.js";
class BasketController {
    async addDeviceIntoBasket(req, res) {
        let {deviceId, basketId, amount} = req.body;
        if (!amount) {
            amount = 1;
        }

        const basketobj = await basketDevice.create({deviceId, basketId, amount});
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