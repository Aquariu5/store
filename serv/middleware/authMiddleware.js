
import jsonwebtoken from "jsonwebtoken";
export default function(req, res, next) {
    if (req.method === 'OPTIONS') {
        next();
    }

    try {
        const token = req.headers.authorization.split(' ')[1]; // 'Bearer <token>'
        if (!token) {
            return res.status(401).json({message: 'Нет токена в запросе'});
        }
        const decoded = jsonwebtoken.verify(token, process.env.SECRET_KEY);
        console.log('decoded', decoded);
        req.user = decoded;
        next();
        
    } catch(e) {
        res.status(401).json({message: e.message});
    }
}