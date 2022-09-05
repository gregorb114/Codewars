//Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
function removeExMarks(s) {
    let arr =s.split("");
    arr = arr.filter(function(e){
          return e !== "!";
      })
      return arr.join("");
  }