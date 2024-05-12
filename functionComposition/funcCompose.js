var compose = function(functions){

    return function(x){
        for(let index = functions.length-1; index >= 0; index--){
            let func = functions[index];
            x = func(x);
        }
        return x;
    }
}

module.exports = {compose};