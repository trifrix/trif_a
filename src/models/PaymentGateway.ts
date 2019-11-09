export class PaymentGateway<Tconfig>{
        config?:Tconfig;
        init(config:Tconfig){
             this.config = config;
    }
} 