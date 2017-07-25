Promise.prototype.done = function (resolve, reject) {
    this.then(resolve, reject)
        .catch(error => {
            setTimeout(() => {
                throw error;
            }, 0);
        });
};

Promise.resolve()
    .done();

Promise.reject('test')
    .done();
// test
