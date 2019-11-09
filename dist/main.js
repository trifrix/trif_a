"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
// import * as myAdder from "./maths";
// import { Interface } from "readline";
// import { userInfo } from "os";
const router = require('koa-route');
const apiUser = __importStar(require("./api/users"));
//import { adder } from "./maths";
const Payment = __importStar(require("./payment/payment"));
const app = new Koa();
// app.use(async ctx => {
//   const mathop: myAdder.IMathOp = new myAdder.maths();
//   ctx.body = await getUsers();
// });
app.use(router.get('/users', apiUser.displayuserInfo));
app.use(router.get('/users/xyz', apiUser.displayUsers));
app.use(router.get('/payment', Payment.handlePayments));
app.listen(3099);
//import displayuserInfo= require("getUsers");
//# sourceMappingURL=main.js.map