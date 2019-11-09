export interface IMathOp {
  compute(x: number, y: number): number;
}

export class Multiply implements IMathOp {
  compute(x: number, y: number) {
    return x * y;
  }
}

export class adder implements IMathOp {
  compute(x: number, y: number) {
    return x + y;
  }
}

let a = new Multiply();
let result = a.compute(10, 20);

console.log(result);
