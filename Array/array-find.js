console.log([1, 2, -5, 10, -6].find(n=>n < 0));     // -5

console.log([1, 2, -5, 10, -6].findIndex(n=>n < 0));    // 2


console.log([NaN].indexOf(NaN));                    // -1
console.log([NaN].findIndex(n=>Number.isNaN(n)));   // 0
