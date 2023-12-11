/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let strArr = str.toLowerCase().replace(/[^a-z0-9]/g, '').split('');
  let reversedArr = [];
  for (let i = strArr.length - 1; i >= 0; i--) {
    reversedArr.push(strArr[i]);
  }

  let reversedStr = reversedArr.join('');

  return strArr.join('') === reversedStr;
}

console.log( isPalindrome('Able, was I ere I saw Elba!'))

module.exports = isPalindrome;
