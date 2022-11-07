function myReplace(str, before, after) {

    str = str.split(" ");
    for(var i = 0; i<str.length; i++){
        if(str[i] == before){
            str[i] = after;
        }
    }
    str = str.join(" ");
    return str;
  }
  
  /*debug test*/
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");