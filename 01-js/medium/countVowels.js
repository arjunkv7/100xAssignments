/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    let vowelsArr = [ 'a', 'A', 'e', 'E', 'i', 'I', 'O', 'o', 'U', 'u']
    let vowelsCountObj = [];
    let strArr = str.toLowerCase().split('');
    for (let i = 0; i < strArr.length; i++) {
      if (vowelsArr.includes(strArr[i]) ) {
        vowelsCountObj.push(strArr[i]);
      }
    }
    return vowelsCountObj.length;
}

module.exports = countVowels;