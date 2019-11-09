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
class PaymentProcessor {
    constructor(gateway) {
        this.gateway = gateway;
    }
    makePayment(amount, from, to) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Writing payment start to db");
            console.log("Notifycheckinasyst notification Modules");
            //const config: TConfig = JSON.parse("{server: whatever v took frm db}");
            const config = JSON.parse("[{\"serverip\":\"54\",\"pwd\":\"test\"}]");
            this.gateway.init(config);
            const paymentResult = yield this.gateway.callPaymentAPI(amount, from, to);
            return paymentResult;
        });
    }
}
exports.PaymentProcessor = PaymentProcessor;
//# sourceMappingURL=PaymentProcessor.js.map