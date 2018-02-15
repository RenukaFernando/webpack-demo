function myFunc() {
    return import(/* webpackChunkName: "math" */ './math').then(
        math => math.default(4, 5) * math.product(2)
    );
}

myFunc().then(result => {
    console.log(result);
});