"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoError = exports.insufficientParameters = exports.failureResponse = exports.successResponse = void 0;
const statusCodes_1 = require("../models/statusCodes");
function successResponse(message, DATA, res) {
    res.status(statusCodes_1.StatusCodes.Success).json({
        STATUS: 'SUCCESS',
        MESSAGE: message,
        DATA
    });
}
exports.successResponse = successResponse;
function failureResponse(message, DATA, res) {
    res.status(statusCodes_1.StatusCodes.Success).json({
        STATUS: 'FAILURE',
        MESSAGE: message,
        DATA
    });
}
exports.failureResponse = failureResponse;
function insufficientParameters(res) {
    res.status(statusCodes_1.StatusCodes.BadRequest).json({
        STATUS: 'FAILURE',
        MESSAGE: 'Insufficient parameters',
        DATA: {}
    });
}
exports.insufficientParameters = insufficientParameters;
function mongoError(err, res) {
    res.status(statusCodes_1.StatusCodes.InternalError).json({
        STATUS: 'FAILURE',
        MESSAGE: 'MongoDB error',
        DATA: err
    });
}
exports.mongoError = mongoError;
