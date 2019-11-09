import Koa = require("koa");
import mssql = require("mssql");
// import * as myAdder from "./maths";
// import { Interface } from "readline";
// import { userInfo } from "os";
const router = require ('koa-route');
import * as apiUser from "./api/users"
//import { adder } from "./maths";
import * as Payment from "./payment/payment"
 
const app= new Koa();

// app.use(async ctx => {
//   const mathop: myAdder.IMathOp = new myAdder.maths();
//   ctx.body = await getUsers();
// });
app.use(router.get('/users', apiUser.displayuserInfo));
app.use(router.get('/users/xyz', apiUser.displayUsers));
app.use(router.get('/payment',Payment.handlePayments))

app.listen(3099);

//import displayuserInfo= require("getUsers");