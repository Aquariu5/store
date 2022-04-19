import * as uuid from 'uuid';
import path from 'path';
import { device } from '../models/models.js';
import ApiError from '../error/ApiError.js';
class DeviceController {
    
    async addDevice(req, res, next) {
        try {
            const __dirname = path.resolve(path.dirname(''));
            //console.log('dirname', __dirname);
            console.log('body', req.body);
            console.log('img', req.files);
            const {price, name, brandId, typeId} = req.body;
            const {img} = req.files;
            
            let filename = uuid.v4() + '.jpg';
            img.mv(path.resolve(__dirname, 'static', filename));
    
            const deviceobj = await device.create({name, price, brandId, typeId, img: filename});
            return res.json(deviceobj);
        } catch(e) {
            next(ApiError.badRequest(e.message));
        }

    }

    async getAll(req, res, next) {

        try {
            let {brandId, typeId, limit, page} = req.query;
            let deviceobj;
            limit = limit || 9;
            page = page || 1;
            const offset = page * limit - limit;
            console.log('brand, type', brandId, typeId);
            //ничо не задано
            if (!brandId && !typeId) {
                deviceobj = await device.findAndCountAll({limit, offset});
            }
            // задан typeId
            else if (!brandId && typeId) {
                deviceobj = await device.findAndCountAll({where: {typeId}});
            }
            else if (brandId && !typeId) {
                deviceobj = await device.findAndCountAll({where: {brandId}});
            }
            else if (brandId && typeId) {
                deviceobj = await device.findAndCountAll({where: {brandId, typeId}});
            }
            else {
                next(ApiError.badRequest(e.message));
            }
            return res.json(deviceobj);
        }
        catch(e) {
            next(ApiError.badRequest(e.message));
        }

    }

    async getById(req, res, next) {
        const {id} = req.params;

        if (!id) {
            next(ApiError.badRequest('ID не указан для девайса'));
            return;
        }
        const deviceobj = await device.findAll({where: {id}});
        return res.json(deviceobj);
    }
}

export default new DeviceController();