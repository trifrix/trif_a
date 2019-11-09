"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Multiply {
    compute(x, y) {
        return x * y;
    }
}
exports.Multiply = Multiply;
class adder {
    compute(x, y) {
        return x + y;
    }
}
exports.adder = adder;
let a = new Multiply();
let result = a.compute(10, 20);
console.log(result);
//# sourceMappingURL=maths.js.map