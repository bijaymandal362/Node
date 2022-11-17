// class Math {
//     constructor() {

//     }
//     add(x, y) {
//         return x + y;
//     }
//     subtract(x, y) {
//         return x - y;
//     }
//     multiply(x, y) {
//         return x * y;
//     }
//     divide(x, y) {
//         return x / y;
//     }
//     pi() { return 3.14; }
// }
// module.exports = Math;

let add = function (x, y) {
    return x + y;
}
let subtract = function (x, y) {
    return x - y;
}
let multiply = function (x, y) {
    return x * y;
}
let divide = function (x, y) {
    return x/y;
}
let pi = 3.14;

module.exports={
    Add: add,
    Sub: subtract,
    Mul: multiply,
    Div: divide,
    PI: pi
};
