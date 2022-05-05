import ApiError from "../error/ApiError.js";
import bcrypt from 'bcrypt';
import jsonwebtoken from "jsonwebtoken";
import {user, basket} from '../models/models.js'
const generateJWT = async (id, email, role) => {
    
    return jsonwebtoken.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        { expiresIn: '24h'}
    )
}

class userController {
    async registration(req, res, next) {
        let {email, password, role} = req.body;
        role = role || 'USER';
        if (!email || !password) {
            return next(ApiError.badRequest('Не задан логин или пароль'));
        }
        const candidate = await user.findOne({where: {email}});
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с  таким email уже существует'))
        }
        
        const hashPass = await bcrypt.hash(password, 5); // захешированный пароль
        

        const userobj = await user.create({email, password: hashPass, role}); // кладем захешенный пароль в БД
        const basketobj = await basket.create({userId: userobj.id}); // создаем корзину с id новосозданного пользователя
    
        const token = await generateJWT(userobj.id, email, role);
        console.log('token', token);
        return res.json({token});
    }   

    async login(req, res, next) {
        const {email, password} = req.body;
        const userobj = await user.findOne({where: {email}});
        if (!userobj) {
            return next(ApiError.forbidden(`Пользователь с email ${email} не найден`));
        }
        const inputHash = await bcrypt.hash(password, 5);
        //if (userobj.password != inputHash) {
        if (!bcrypt.compareSync(password, userobj.password)) {
            //console.log('inputpass, base', inputHash, userobj.password);
            return next(ApiError.forbidden('Неверный пароль'));
        }
        const token = await generateJWT(userobj.id, email, userobj.role);
        return res.json({token});
    }
    
    async check(req, res, next) {
        const token = await generateJWT(req.user.id, req.user.email, req.user.role);
        return res.status(200).json({token});
    }
}

export default new userController();