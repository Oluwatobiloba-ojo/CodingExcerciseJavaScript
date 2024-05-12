var map = function(arr, fn){
    let result = [];
       
    for(let count = 0; count < arr.length; count++){
        result.push(fn(arr[count], count));
    }
    return result;
}

module.exports = {map}