function* fibonacci() {
    let [prev, curr] = [0, 1];
    for (; ;) {
        [prev, curr] = [curr, prev + curr];
        yield curr;
    }
}

for (let n of fibonacci()) {
    if (n > 100) break;
    console.log(n);
}
