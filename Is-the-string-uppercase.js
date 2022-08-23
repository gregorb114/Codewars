create-a-method-to-see-whether-the-string-is-all-captureEvents


string.prototype.isUpperCase = function(){
    if(this.toString() == this.toUpperCase()){
      return true;
    } else{
      return false;
    }
  }
  