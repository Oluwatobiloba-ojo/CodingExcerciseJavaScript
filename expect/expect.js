var expect = function(value){

    return {
        toBe: function(value2){
             if (value === value2){
                return true
             }else throw new Error("Not Equal");
        },
        notToBe:function(value3){
            return value !== value3 ? {"value": true}: {"error": "Equal"};
        }
    }
};

module.exports = expect;
