const {map} = require("./map")

test("That that plus one of a function return an array which value increase by one", ()=>{
    let nums = [1, 2, 3];
    let plusOne = (n) => {return n +1};
    let result = map(nums, plusOne);
    let output = [2, 3, 4];
    expect(output).toEqual(result);
});


test("That the addition of the index increase the element", () => {
    let nums = [1, 2, 3];
    let plusI = (n, i) => {return n + i};
    let result = map(nums, plusI);
    let output = [1, 3, 5];
    expect(output).toEqual(result);
});

test("That a constant it return only the constant", () =>{
    let nums = [1, 2, 3];
    let constant = () => {return 42}
    let result = map(nums, constant);
    let output = [42, 42, 42];
    expect(output).toEqual(result);
})