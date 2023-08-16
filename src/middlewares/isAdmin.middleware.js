"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAdminMiddleware = void 0;
const errors_1 = require("../errors");
const isAdminMiddleware = (req, res, next) => {
    const user = res.locals.user;
    if (user && user.admin) {
        next();
    }
    else {
        throw new errors_1.AppError("Unauthorized - Only admin users are allowed", 403);
    }
};
exports.isAdminMiddleware = isAdminMiddleware;
