import jsonwebtoken from "jsonwebtoken";



export default function(role) {
    return function(req, res, next) {
        if (req.method === 'OPTIONS') {
            next();
        }
    
        try {
            const token = req.headers.authorization.split(' ')[1]; // 'Bearer <token>'
            if (!token) {
                return res.status(401).json({message: 'Нет токена в запросе'});
            }
            console.log('gotten token', token);
            const decoded = jsonwebtoken.verify(token, process.env.SECRET_KEY);
            console.log('decoded', decoded);
            if (decoded.role == role) {
                req.user = decoded;
                next();
            }
            else {
                res.status(403).json({message: `Нет прав, текущая роль ${decoded.role}, необходима ${role}`})
            }
            
        } catch(e) {
            e.message.includes('jwt') ? e.message = 'Время сеанса истекло. Авторизуйтесь заново' : e.message;
            res.status(401).json({message: e.message});
        }
    }
}