"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const IciciGateway_1 = require("../models/IciciGateway");
const PaytmGateway_1 = require("../models/PaytmGateway");
const PaymentProcessor_1 = require("../models/PaymentProcessor");
function handlePayments(ctx) {
    return __awaiter(this, void 0, void 0, function* () {
        const amount = ctx.query.amount;
        const to = ctx.query.to;
        const from = ctx.query.from;
        if (amount > 1000) {
            const gateway = new IciciGateway_1.IciciGateway();
            const processor = new PaymentProcessor_1.PaymentProcessor(gateway);
            //processor.makePayment(amount, to, from);
            ctx.body = yield processor.makePayment(amount, to, from);
        }
        else {
            const gateway = new PaytmGateway_1.PaytmGateway();
            const processor = new PaymentProcessor_1.PaymentProcessor(gateway);
            //processor.makePayment(amount, to, from);
            ctx.body = yield processor.makePayment(amount, to, from);
        }
    });
}
exports.handlePayments = handlePayments;
//# sourceMappingURL=payment.js.map