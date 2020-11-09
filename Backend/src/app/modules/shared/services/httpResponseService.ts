import { ValidationError } from 'class-validator';
import { Response } from 'express';
import { StatusCode } from '../models/statusCodes';


export function successResponse(message: string, DATA: any, res: Response) {
    res.status(StatusCode.Success).json({
        STATUS: 'SUCCESS',
        MESSAGE: message,
        DATA
    });
}

export function failureResponse(message: string, DATA: any, res: Response) {
    res.status(StatusCode.Success).json({
        STATUS: 'FAILURE',
        MESSAGE: message,
        DATA
    });
}

export function insufficientParameters(res: Response, errors?: ValidationError[]) {    
    if (errors.length > 0) {
        let errorTexts = Array();
        for (const errorItem of errors) {
            errorTexts = errorTexts.concat(errorItem.constraints);
        }
        res.status(StatusCode.BadRequest).json({
            STATUS: 'FAILURE',
            MESSAGE: 'Insufficient parameters',
            DATA: errorTexts
        });
    }
}

export function mongoError(err: any, res: Response) {
    res.status(StatusCode.InternalError).json({
        STATUS: 'FAILURE',
        MESSAGE: 'MongoDB error',
        DATA: err
    });
}