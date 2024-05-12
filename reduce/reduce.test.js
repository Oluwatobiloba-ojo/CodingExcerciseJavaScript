const {reduce} = require("./reduce")

test("test that reduce sum all the numbers in the array with an init value", () =>{
    let nums = [1, 2, 3, 4];
    let init = 0;
    let sum = (accum, curr) => {return accum + curr};
    let result = reduce(nums, sum, init);
    let output = 10;
    expect(output).toEqual(result);
});

test("test that reduce sum all the numbers in the array with an init value of 100", () =>{
    let nums = [1, 2, 3, 4];
    let init = 100;
    let sum = (accum, curr) => {return accum + curr*curr};
    let result = reduce(nums, sum, init);
    let output = 130;
    expect(output).toEqual(result);
});

test("test that reduce sum all the numbers in the empty array with give the init vallue", () =>{
    let nums = [];
    let init = 25;
    let sum = (accum, curr) => {return 0};
    let result = reduce(nums, sum, init);
    let output = 25;
    expect(output).toEqual(result);
});
