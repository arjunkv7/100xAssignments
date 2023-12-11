/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // let stringArr1 = str1.replace(/\s/g, '').toLowerCase().split('');
  // let stringArr2 = str2.replace(/\s/g, '').toLowerCase().split('');
  // if (stringArr1.length >= stringArr2.length) {

  //   for (let i = 0; i < stringArr1.length; i++) {
  //     if(!stringArr2.includes(stringArr1[i])) return false;
  
  //   }
  //   return true
    
  // }
  // else {
  //   for (let i = 0; i < stringArr2.length; i++) {
  //     if(!stringArr1.includes(stringArr2[i])) return false;
  
  //   }
  //   return true
  // }

  let replacedStr1 = str1.replace(/\s/g, '').toLowerCase().split('').sort().join('');
  let replacedStr2 = str2.replace(/\s/g, '').toLowerCase().split('').sort().join('');
  console.log(replacedStr1, replacedStr2)
  return replacedStr1 === replacedStr2
 
}

module.exports = isAnagram;
