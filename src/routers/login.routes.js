"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const loginController_1 = require("../controllers/loginController");
const ensureDataIsValid_middleware_1 = require("../middlewares/ensureDataIsValid.middleware");
const login_schemas_1 = require("../schemas/login.schemas");
const loginRoutes = (0, express_1.Router)();
loginRoutes.post("/login", (0, ensureDataIsValid_middleware_1.ensureDataIsValidMiddleware)(login_schemas_1.createLoginSchema), loginController_1.createLoginController);
exports.default = loginRoutes;
