const {argumentsLength} = require("./countLengthOfArgs")

test('Test that the argument length of 5 is one', () => {
    let lengthOfArgs = argumentsLength(5);
    expect(1).toEqual(lengthOfArgs);
});

test('Test that the argument length of {}, null, "3"  is three', () => {
    let lengthOfArgs = argumentsLength({}, null, "3");
    expect(3).toEqual(lengthOfArgs);
});
