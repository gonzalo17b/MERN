import { Request, Response } from 'express';
import UserService from '../modules/users/userService';
import e = require('express');
import { successResponse } from 'app/modules/shared/services/httpResponseService';

export class UserController {
    private userService = new UserService();
    
    public add(req: Request, res: Response) {
        successResponse('create user successfull', "OK_add", res);
    }

    public get(req: Request, res: Response) {
        successResponse('create user successfull', "OK_get", res);
    }

    public update(req: Request, res: Response) {
        successResponse('create user successfull', "OK_update", res);
    }

    public delete(req: Request, res: Response) {
        successResponse('create user successfull', "OK_add", res);
    }
}