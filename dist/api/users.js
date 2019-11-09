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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const modeluser = __importStar(require("../models/users"));
//const router = require ('koa-route');
function displayUsers(ctx) {
    return __awaiter(this, void 0, void 0, function* () {
    });
}
exports.displayUsers = displayUsers;
function displayuserInfo(ctx) {
    return __awaiter(this, void 0, void 0, function* () {
        ctx.body = yield modeluser.getUsers();
    });
}
exports.displayuserInfo = displayuserInfo;
//# sourceMappingURL=users.js.map