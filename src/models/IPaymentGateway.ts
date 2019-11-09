export interface IPaymentgateway<TConfig> {
    init(config: TConfig) : void;
    callPaymentAPI(amount:number, from: string, to: string) : Promise<string>;
}