import { Response } from 'express';
import { StatusCodes } from '../models/statusCodes';


export function successResponse(message: string, DATA: any, res: Response) {
    res.status(StatusCodes.Success).json({
        STATUS: 'SUCCESS',
        MESSAGE: message,
        DATA
    });
}