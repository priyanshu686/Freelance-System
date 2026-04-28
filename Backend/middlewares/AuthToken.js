// import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

export const Auth = (req,res,next)=>{
    const data = req.headers.authorization;
    if(!data){
        return res.status(401).json({ message: 'No token provided' });
    }
    const Token = data.split(' ')[1];
    if (!Token) {
        return res.status(401).json({ error: "Access denied. No token provided." });
    }
    try{
        const decoded = jwt.verify(Token,process.env.JWT_SECRET);
        console.log(decoded);
        req.user = decoded;
        next();
    }catch(err){
        return res.status(403).json({ error: "Invalid or expired token" });
    }
}