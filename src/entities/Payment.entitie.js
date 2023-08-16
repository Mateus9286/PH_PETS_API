"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = exports.PaymentType = void 0;
const typeorm_1 = require("typeorm");
const User_entitie_1 = require("./User.entitie");
var PaymentType;
(function (PaymentType) {
    PaymentType["CARD"] = "card";
    PaymentType["MONEY"] = "money";
})(PaymentType || (exports.PaymentType = PaymentType = {}));
let Payment = exports.Payment = class Payment {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Payment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: PaymentType,
        default: PaymentType.MONEY,
    }),
    __metadata("design:type", String)
], Payment.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Payment.prototype, "Troco", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => User_entitie_1.User, (user) => user.payment),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", User_entitie_1.User)
], Payment.prototype, "user", void 0);
exports.Payment = Payment = __decorate([
    (0, typeorm_1.Entity)("payments")
], Payment);
