const my_expect = require("./expect")


test("This is to test the expect class or methods", () => {
    var output = my_expect(5).toBe(5);
    expect(output).toEqual({"value": true});
});


test("That when the value is not the same return not Equals ", () => {
    var output = my_expect(5).toBe(null);
    expect(output).toEqual({"error": "Not Equal"});
});


test("That notToBe returns if the value are not same return true if not throw error", ()=>{
    var output = my_expect(5).notToBe(null);
    expect(output).toEqual({"value": true});
});

