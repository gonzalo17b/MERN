import { Request, Response } from 'express';
import UserService from '../modules/users/userService';
import e = require('express');
import { insufficientParameters, mongoError, successResponse } from '../modules/shared/services/httpResponseService';
import {  AddUserDto, IUserResponse, UpdateUserDto } from '../modules/users/userModel';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

export class UserController {
    private userService = new UserService();
    
    public add(req: Request, res: Response) {
        const user = plainToClass(AddUserDto, req.body);
        validate(user).then(errors => {
            if (errors.length > 0) {                
                insufficientParameters(res, errors);
                return;
            } else {
                this.userService.createUser(user, (err: string, user: IUserResponse) => {
                    if (err) {
                        mongoError(err, res);
                    } else {
                        successResponse('create user successfull', user, res);
                    }
                });
            }
        });
    }

    public get(req: Request, res: Response) {
        if (!req.params.id) {
            insufficientParameters(res);
            return;
        }
        this.userService.filterUser(req.params.id, (err: string, user_data: IUserResponse) => {
            if (err) {
                mongoError(err, res);
            } else {
                //TODO_GBC: user = null
                successResponse('get user successfull', user_data, res);
            }
        });
    }

    public update(req: Request, res: Response) {
        if (!req.params.id) {
            insufficientParameters(res);
            return;
        }

        const user = plainToClass(UpdateUserDto, req.body);
        validate(user).then(errors => {
            if (errors.length > 0) {                
                insufficientParameters(res, errors);
                return;
            } else {
                this.userService.updateUser(req.params.id, user, (err: string) => {
                    if (err) {
                        mongoError(err, res);
                    } else {
                        successResponse('update user successfull', null, res);
                    }
                });
            }
        });
    }

    public delete(req: Request, res: Response) {
        if (!req.params.id) {
            insufficientParameters(res);
            return;
        }
        this.userService.deleteUser(req.params.id, (err: string) => {
            if (err) {
                mongoError(err, res);
            } else {
                successResponse('delete user successfull', req.params.id, res);
            }
        });
    }
}