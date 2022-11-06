// An anagram is the result of rearranging the letters of a word to produce a new word

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

var isAnagram = function (test, original) {
  let len1 = test.length;
  let len2 = original.length;
  if (len1 !== len2) {
    console.log("Invalid Input");
    return false;
  }
  var t = test.toLowerCase().split("").sort().join("");
  var o = original.toLowerCase().split("").sort().join("");
  return t == o ? true : false;
};
