var expect = function(value){

    return {
        toBe: function(value2){
             return value === value2 ? {"value": true} : {"error": "Not Equal"};
        },
        notToBe:function(value3){
            return value !== value3 ? {"value": true}: {"error": "Equal"};
        }
    }
};

module.exports = expect;
