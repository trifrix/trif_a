import Koa = require("koa");
import * as modeluser from "../models/users"
//const router = require ('koa-route');

export async function displayUsers(ctx: Koa.Context){

}

export async function displayuserInfo(ctx: Koa.Context ) {
    ctx.body= await modeluser.getUsers();
  }