import { IPaymentgateway } from "./IPaymentGateway";
import { PaymentGateway } from "./PaymentGateway";

export interface PaytmConfiguration{
    ServerIP: string;
    PayTMToken: string;
}

export class PaytmGateway extends PaymentGateway<PaytmConfiguration> implements IPaymentgateway<PaytmConfiguration>{
    async callPaymentAPI(amount: number, from: string, to: string) {
        return "Paid "+" "+amount+" rupees from "+from+" PAYTM to "+to+" . Thanx";
    }
    
}