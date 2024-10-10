import jwt from 'jsonwentoken';
import ErrorsHandling from './ErrorsHandling';

export const verifyToken = (req,res,next)=>{
    const token = req.cookie.access_token;

    if(!token) return next(ErrorsHandling(401,'Unauthorized'));

    jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
        if(err) return next(ErrorsHandling(403,'Forbidden || token is not valid'));

        req.user = user;
        next();
    });

};