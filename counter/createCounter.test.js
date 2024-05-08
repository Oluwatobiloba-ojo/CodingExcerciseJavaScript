const createCounter = require("./createCounter")

test("Create Counter method ", () => {
    let counter = 5;
    let createCounterFunc = createCounter(counter);
    let result = createCounterFunc.increment();
    expect(result).toEqual(6);
    result = createCounterFunc.reset();
    expect(result).toEqual(5);
    result = createCounterFunc.decrement();
    expect(result).toEqual(4);
});

test("Create Counter method ", () => {
    let counter = 0;
    let createCounterFunc = createCounter(counter);
    let result = createCounterFunc.increment();
    expect(result).toEqual(1);
    result = createCounterFunc.increment();
    expect(result).toEqual(2);
    result = createCounterFunc.decrement();
    expect(result).toEqual(1);
    result = createCounterFunc.reset();
    expect(result).toEqual(0);
    result = createCounterFunc.reset();
    expect(result).toEqual(0);
});
