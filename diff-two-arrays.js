function diffArray(arr1, arr2) {
  
  var newArr = arr1.concat(arr2);
 
  return  newArr.filter(arrItem => !arr1.includes(arrItem) || !arr2.includes(arrItem));
}


diffArray([1,2,3], [1,5,4]); 
