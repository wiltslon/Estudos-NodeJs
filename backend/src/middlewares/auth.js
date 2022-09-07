import { response } from 'express';
import {jwt, verify} from 'jsonwebtoken';


export default async(request, response, next)=>{
    const authHeader = request.headers.authorization;

    if(!authHeader){
        return response.status(401).json({error: "User not authorizated!"});
    }

    const [, token] = authHeader.split(" ");
try{
    const decoded = verify(token, "c53fd45b2f336a44d158902c252e2e1c");
    console.log(decoded);

    return next();
}catch(err){
    return response.status(401).json({error: "Invalid Jwt Token"});
}
}