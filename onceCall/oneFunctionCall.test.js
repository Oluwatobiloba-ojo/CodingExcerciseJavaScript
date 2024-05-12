const {once} = require("./oneFunctionCall")

test("That a one function return the once call the function reciave which is 6", ()=> {
    let fn = (a,b,c) => {return a + b + c}
    let onceFunc = once(fn);
    let oneCall = onceFunc(1, 2, 3)
    expect(6).toEqual(oneCall);
    let secondCall = onceFunc(2,3,4)
    expect(undefined).toEqual(secondCall);
});

test("That a one function return the once call the function reciave which is 6", ()=> {
    let fn = (a,b,c) => {return a * b * c}
    let onceFunc = once(fn);
    let oneCall = onceFunc(5, 7, 4)
    expect(140).toEqual(oneCall);
    let secondCall = onceFunc(2,3,6)
    expect(undefined).toEqual(secondCall);
});

test("That a one function return the once call the function reciave which is 6", ()=> {
    let fn = (a1,a2,a3,a4,a5,a6,a7) => {return a1 * a5 - a7}
    let onceFunc = once(fn);
    let oneCall = onceFunc(6,4,2,4,5,3,2)
    expect(28).toEqual(oneCall);
});
