const findRelativeRank = require("./findRelativeRanks")


test("that the name of ope is ope", () => {
   let score = [5, 4, 3, 2,1];
   let position = ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"];
   expect(findRelativeRank(score)).toEqual(position);
});

test("That the array of score will give us the position of the array", ()=> {
    let score = [10,3,8,9,4]
    let position = ["Gold Medal", "5", "Bronze Medal", "Silver Medal", "4"]
    expect(findRelativeRank(score)).toEqual(position);
});

