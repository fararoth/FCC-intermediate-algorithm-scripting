function destroyer(arr) {

    var argumentsArr = [];
    
    for(var i = 1; i < arguments.length; i++){
        argumentsArr.push(arguments[i]);
    }

    
var newArr = argumentsArr.concat(arr);

return  newArr.filter(arrItem => !argumentsArr.includes(arrItem) || !arr.includes(arrItem));
}
