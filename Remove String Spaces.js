//Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x){
    let result = ""
    for(let index = 0; index < x.length; index++){
      if(x[index] !== " "){
        result += x[index];
      }
    }
    return result;
  }