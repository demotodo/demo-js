function* objectEntries(obj) {
    let propKeys = Reflect.ownKeys(obj);

    for (let propKey of propKeys) {
        yield [propKey, obj[propKey]];
    }
}

let jane = {first: 'Jane', second: 'Doe'};

for (let [key, value] of objectEntries(jane)) {
    console.log(`${key}: ${value}`);
}
// first: Jane
// second: Doe


// ----------------------------------------------------

function* objectEntries2() {
    let propKeys = Object.keys(this);

    for (let propKey of propKeys) {
        yield [propKey, this[propKey]];
    }
}

let jane2 = {first: 'Jane2', second: 'Doe'};

jane2[Symbol.iterator] = objectEntries2;

for (let [key,value] of jane2) {
    console.log(`${key}: ${value}`);
}
// first: Jane2
// second: Doe
