//import {callPaymentAPI}
import { handlePayments } from "../payment/payment";
import { IPaymentgateway } from "./IPaymentGateway";
export class PaymentProcessor<
  TConfig,
  TGateway extends IPaymentgateway<TConfig>
> {
  gateway: TGateway;

  constructor(gateway: TGateway) {
    this.gateway = gateway;
  }
  async makePayment(amount: number, from: string, to: string) {
    console.log("Writing payment start to db");
    console.log("Notifycheckinasyst notification Modules");
    //const config: TConfig = JSON.parse("{server: whatever v took frm db}");
    const config = JSON.parse("[{\"serverip\":\"54\",\"pwd\":\"test\"}]"); 
    this.gateway.init(config);
    const paymentResult = await this.gateway.callPaymentAPI(amount, from, to);
    return paymentResult;
  }
}
