var findRelativeRanks = function(score){
    let position = new Array(score.length);
    for (let index = 0; index < score.length; index++) {
        let maximum_score = getMaximum(score);
        let maximum_score_index = score.findIndex((value) => value === maximum_score);
        score[maximum_score_index] = 0;
        let position = getPosition(index);
        position[maximum_score_index] = position;
    }
    return position;
};

function getMaximum(score){
    let max = score[0];
    for(count of score){
        if (count > max){
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
