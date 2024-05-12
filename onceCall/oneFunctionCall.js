var once = function(fn){
    let call = 0;

    return function(...args){
        if (call == 1) return undefined
        call += 1;
        return fn(...args);
    };

}

module.exports = {once};
