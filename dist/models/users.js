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
const mssql = require("mssql");
const c = {
    user: "sa",
    password: "Welcome1",
    server: "Haar0547",
    database: "ReactJs"
};
function getUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const pool = yield new mssql.ConnectionPool(c).connect();
        const result = yield pool.request().query("select * from users");
        pool.close();
        return result.recordset;
    });
}
exports.getUsers = getUsers;
//# sourceMappingURL=users.js.map