const {compose} = require("./funcCompose")

test("Test for the composition of a function which is 65", () => {
    let functions = [x => x+1, x => x*x, x => 2 * x];
    let x = 4;
    let func = compose(functions);
    let result = func(x);
    let output = 65;
    expect(output).toEqual(result);
});


test("Test for the composition of a function which is 1000", () => {
    let functions = [x => 10 * x, x => 10 * x, x => 10 * x];
    let x = 1;
    let func = compose(functions);
    let result = func(x);
    let output = 1000;
    expect(output).toEqual(result);
});

test("Test for the composition of a zero function give the identity function which is 42", () => {
    let functions = [];
    let x = 42;
    let func = compose(functions);
    let result = func(x);
    let output = 42;
    expect(output).toEqual(result);
});
