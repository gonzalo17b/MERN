"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
// import { insufficientParameters, mongoError, successResponse, failureResponse } from '../modules/common/service';
// import { IUser } from '../modules/users/model';
const service_1 = require("../modules/users/service");
class UserController {
    constructor() {
        this.userService = new service_1.default();
    }
    add(req, res) {
        // this check whether all the filds were send through the erquest or not
        // if (req.body.name && req.body.name.first_name && req.body.name.middle_name && req.body.name.last_name &&
        //     req.body.email &&
        //     req.body.phone_number &&
        //     req.body.gender) {
        //     const user_params: IUser = {
        //         name: {
        //             first_name: req.body.name.first_name,
        //             middle_name: req.body.name.middle_name,
        //             last_name: req.body.name.last_name
        //         },
        //         email: req.body.email,
        //         phone_number: req.body.phone_number,
        //         gender: req.body.gender,
        //         modification_notes: [{
        //             modified_on: new Date(Date.now()),
        //             modified_by: null,
        //             modification_note: 'New user created'
        //         }]
        //     };
        //     this.user_service.createUser(user_params, (err: any, user_data: IUser) => {
        //         if (err) {
        //             mongoError(err, res);
        //         } else {
        //             successResponse('create user successfull', user_data, res);
        //         }
        //     });
        // } else {
        //     // error response if some fields are missing in request body
        //     insufficientParameters(res);
        // }
    }
    get(req, res) {
        res.status(200).json({
            STATUS: 'FAILURE',
            MESSAGE: 'Insufficient parameters',
            DATA: "hola gonzalo"
        });
        // if (req.params.id) {
        //     const user_filter = { _id: req.params.id };
        //     this.user_service.filterUser(user_filter, (err: any, user_data: IUser) => {
        //         if (err) {
        //             mongoError(err, res);
        //         } else {
        //             successResponse('get user successfull', user_data, res);
        //         }
        //     });
        // } else {
        //     insufficientParameters(res);
        // }
    }
    update(req, res) {
        // if (req.params.id &&
        //     req.body.name || req.body.name.first_name || req.body.name.middle_name || req.body.name.last_name ||
        //     req.body.email ||
        //     req.body.phone_number ||
        //     req.body.gender) {
        //     const user_filter = { _id: req.params.id };
        //     this.user_service.filterUser(user_filter, (err: any, user_data: IUser) => {
        //         if (err) {
        //             mongoError(err, res);
        //         } else if (user_data) {
        //             user_data.modification_notes.push({
        //                 modified_on: new Date(Date.now()),
        //                 modified_by: null,
        //                 modification_note: 'User data updated'
        //             });
        //             const user_params: IUser = {
        //                 _id: req.params.id,
        //                 name: req.body.name ? {
        //                     first_name: req.body.name.first_name ? req.body.name.first_name : user_data.name.first_name,
        //                     middle_name: req.body.name.first_name ? req.body.name.middle_name : user_data.name.middle_name,
        //                     last_name: req.body.name.first_name ? req.body.name.last_name : user_data.name.last_name
        //                 } : user_data.name,
        //                 email: req.body.email ? req.body.email : user_data.email,
        //                 phone_number: req.body.phone_number ? req.body.phone_number : user_data.phone_number,
        //                 gender: req.body.gender ? req.body.gender : user_data.gender,
        //                 is_deleted: req.body.is_deleted ? req.body.is_deleted : user_data.is_deleted,
        //                 modification_notes: user_data.modification_notes
        //             };
        //             this.user_service.updateUser(user_params, (err: any) => {
        //                 if (err) {
        //                     mongoError(err, res);
        //                 } else {
        //                     successResponse('update user successfull', null, res);
        //                 }
        //             });
        //         } else {
        //             failureResponse('invalid user', null, res);
        //         }
        //     });
        // } else {
        //     insufficientParameters(res);
        // }
    }
    delete(req, res) {
        // if (req.params.id) {
        //     this.user_service.deleteUser(req.params.id, (err: any, delete_details) => {
        //         if (err) {
        //             mongoError(err, res);
        //         } else if (delete_details.deletedCount !== 0) {
        //             successResponse('delete user successfull', null, res);
        //         } else {
        //             failureResponse('invalid user', null, res);
        //         }
        //     });
        // } else {
        //     insufficientParameters(res);
        // }
    }
}
exports.UserController = UserController;
