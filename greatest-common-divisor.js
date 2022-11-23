/*this is a extra challenge*/

function greatestCommon(arr) {

    var aux = 0;

    if(arr[0] == 0 || arr[1] == 0){
       console.log("no data");
        return;
    }else{
        while(arr[0] != arr[1]){
        if(arr[0] < arr[1]){
            arr[1] = arr[1]-arr[0]
        }else{
             arr[0] = arr[0]-arr[1]
        }
    }
    }
    
  return arr[0];
}
