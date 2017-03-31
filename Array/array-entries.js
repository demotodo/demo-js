'use strict';

for (let index of ['a', 'b'].keys()) {
    console.log(index);
}
// 0
// 1


// not supported by Node 6.8.1
//
// for (let elem of ['a', 'b'].values()) {
//     console.log(elem);
// }


for (let [index, elem] of ['a', 'b'].entries()) {
    console.log(index + " : " + elem);

}
// 0 : a
// 1 : b
