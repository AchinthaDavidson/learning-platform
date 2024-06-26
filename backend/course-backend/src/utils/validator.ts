import { verify } from "crypto";
import { NextFunction, Request, Response } from "express";
import { ValidationChain,validationResult } from "express-validator";
import { verifyToken } from "../services/auth.service";

export const validate=(validations:ValidationChain[])=>{
    return async(req:Request,res:Response,next:NextFunction)=>{

        await Promise.all(validations.map(validation=>validation.run(req)))
        const errors= validationResult(req);

        if(errors.isEmpty()){
            return next()
        }
        res.status(400).json({err:errors})
    }
}
export const authGurd=async (req:Request,res:Response,next:NextFunction)=>{
    const authToken= req.headers['authorization'];

    if(!authToken){
        return res.status(400).send({
            err:'Forbinderd Resource1'
        })

    }

    try{
        const playload=await verifyToken(authToken.split('Bearer ')[1]); 
        req.user=playload
       
        next()
    }catch(err){
        return res.status(400).send({
            err:'Forbinderd Resource'
        })

    }
}