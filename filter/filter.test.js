const filter = require("./filter");


test("That filter based on a function ", () => {
    let arr = [0,10,20,30];
    let greaterThan10 = (n) => {return n > 10};
    let result = [20, 30];
    let output = filter(arr, greaterThan10);
    expect(output).toEqual(result);
});

test("That filter based on a function ", () => {
    let arr = [1,2,3];
    let findIndex = (element, index) => {return index === 0};
    let result = [1];
    let output = filter(arr, findIndex);
    expect(output).toEqual(result);
});

test("That filter based on a function ", () => {
    let arr = [-2,-1,0,1,2];
    let plusOne = (element) => {return element + 1};
    let result = [-2,0,1,2];
    let output = filter(arr, plusOne);
    expect(output).toEqual(result);
});
