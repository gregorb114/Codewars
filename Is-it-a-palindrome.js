//Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(str) {
    str = str.toLowerCase()
    let a = 0
    let b = str.length
    while (a < b) {
      if (str[a] != str[b-1])
        return false
      a++
      b--
    }
    return true
  }
  