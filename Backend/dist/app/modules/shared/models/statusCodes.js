"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusCodes = void 0;
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["created"] = 201] = "created";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
    StatusCodes[StatusCodes["Unauthorized"] = 401] = "Unauthorized";
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["InternalError"] = 500] = "InternalError";
})(StatusCodes = exports.StatusCodes || (exports.StatusCodes = {}));
