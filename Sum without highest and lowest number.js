// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6


function sumArray(arr) {
    if (arr == null) {
      return 0;
    } else if (arr.length < 2) {
      return 0;
    } else {
      arr = arr.sort(function(a,b) {return a - b;});
      var total = 0;
      for (var i = 1; i < arr.length - 1; i++) {
        total += arr[i];
      }
      return total;
    }
  }