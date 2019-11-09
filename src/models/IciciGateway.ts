import { IPaymentgateway } from "./IPaymentGateway";
import { PaymentGateway } from "./PaymentGateway";

export interface iciciConfiguration {
    ServerIP: string;
    Passsword: string;
}

export  class IciciGateway extends PaymentGateway<iciciConfiguration> implements IPaymentgateway<iciciConfiguration>{
    async  callPaymentAPI(amount: number, from: string, to: string) {
        return "Paid "+" "+amount+" rupees from "+from+" ICICI to "+to+" . Thanx";
    }
    

}