import Koa = require("koa");
import { IciciGateway, iciciConfiguration } from "../models/IciciGateway";
import { PaytmGateway, PaytmConfiguration } from "../models/PaytmGateway";
import { PaymentProcessor } from "../models/PaymentProcessor";

export async function handlePayments(ctx: Koa.Context) {
  const amount = ctx.query.amount;
  const to = ctx.query.to;
  const from = ctx.query.from;

  if (amount > 1000) {
    const gateway = new IciciGateway();
    const processor = new PaymentProcessor<iciciConfiguration,IciciGateway>(gateway);
    //processor.makePayment(amount, to, from);
    ctx.body = await processor.makePayment(amount, to, from);
  } else {
    const gateway = new PaytmGateway();
    const processor = new PaymentProcessor<PaytmConfiguration,PaytmGateway>(gateway);
    //processor.makePayment(amount, to, from);
    ctx.body = await processor.makePayment(amount, to, from);
  }
}
