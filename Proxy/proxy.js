var target = {};

var proxy = new Proxy(target, {});

target.x = 1;

console.log(proxy.x);       // 1


// ----------------------------------------------------

var obj = {
    x: 2,
    y: 3
};

var wrapper = new Proxy(obj, {
    get: function (target, key, receiver) {
        console.log(`getting ${key}`);
        return Reflect.get(target, key, receiver);
    },

    set: function (target, key, receiver) {
        console.log(`setting ${key}`);
        return Reflect.set(target, key, receiver);
    }
});


console.log(obj.x);         // 2

console.log(wrapper.x);     // 2, getting x


obj.x = 2;
console.log(obj.x);         // 2

wrapper.x = 3;              // setting x
console.log(obj.x);         // 3


// ----------------------------------------------------

