// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example
// [2, 1, 10]  -->  9

arr.sort((a, b) => b - a).shift() - arr.pop() || 0;
