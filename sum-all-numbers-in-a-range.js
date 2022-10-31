function sumAll(arr) {

    var initArray = arr[0];
    var lastItem = arr[1];

    var newArray = [];
    if(initArray < lastItem){
    for(initArray; initArray <= lastItem;  initArray++){
        newArray.push(initArray);
    }
    }else{
         for(initArray; initArray >= lastItem;  initArray--){
        newArray.push(initArray);
         }
    }
var sum = newArray.reduce((a, b) => a + b, 0);
return sum;
}
