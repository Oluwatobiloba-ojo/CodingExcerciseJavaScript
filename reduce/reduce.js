var reduce = function(nums, fn, init){
    nums.forEach(element => {
        init = fn(init, element);
    });
    return init;
}


module.exports = {reduce}