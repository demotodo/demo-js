Promise.prototype.finally = function (callback) {
    let P = this.constructor;
    return this.then(
        value => P.resolve(callback()).then(() => value),
        error => P.resolve(callback()).then(() => {
                throw error;
            }
        )
    );
};


Promise.resolve('hello')
    .finally(() => console.log('finally-1'));

Promise.reject('test')
    .finally(() => console.log('finally-2'));
