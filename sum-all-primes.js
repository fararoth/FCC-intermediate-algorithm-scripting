function primeVerify(num) {

  if( num == 0 || num == 1 || num == 4){
    return false;
  }
      
  for(var i=2;i<=num-1;i++) {
    if(num % i==0) {
  
      return false;
  
    }
  
  }
  
    return true;
  
}



function sumPrimes(num) {
    let aux = [];

    for(var i = 1; i <= num; i++){
      if(primeVerify(i)) {

      aux.push(i);
      }
    }
    num=aux.reduce((a, b) => a + b, 0);
    return num;
  }