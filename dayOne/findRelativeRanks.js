
var findRelativeRanks = function(score){
    let positions = new Array(score.length);
    for (let index = 0; index < score.length; index++) {
        let maximum_score = getMaximum(score);
        let maximum_score_index = score.findIndex((value) => value === maximum_score);
        score[maximum_score_index] = "";
        let position = getPosition(index);
        positions[maximum_score_index] = position;
    }
    return positions;
};

function getMaximum(score){
    let max = 0;
    for(count of score){
        if (typeof count === "number" && count > max){
            max = count;
        }
    }
    return max;
}


function getPosition(location){
    return location === 0 ? "Gold Medal": 
    location === 1 ? "Silver Medal" :
    location === 2 ? "Bronze Medal":
    String(location+1)
}




module.exports = findRelativeRanks
