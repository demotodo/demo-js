console.log((function (a) {}).length);          // 1

console.log((function (a = 2) {}).length);      // 0

console.log((function (a, b, c = 2) {}).length);      // 2

console.log((function (...rest) {}).length);    // 0
