var createCounter = (init) => {
    let last = init;

    return {
        increment: function(){
            return init += 1;
        },
        decrement: function(){
            return init -= 1;
        },
        reset: function(){
            init = last;
            return init;
        }
    }
} 

module.exports = createCounter;
