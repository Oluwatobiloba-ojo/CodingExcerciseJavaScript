const filter = (arr, fn)=>{
   let number = [];
   for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if(fn(element, index)){
        number.push(element);
    };
   };
   return number
}

module.exports = filter;