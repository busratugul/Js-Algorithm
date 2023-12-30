/* Palindrome
Using the Javascript language, have the function Palindrome(str) take the parameter being passed and retuen the string true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false.

For example: "racecar" is also "racecar" backwards.
--Punctuation and numbers will not be part of the string.
*/

const isPalindrome = (str) => {
  let newStr = str.replace(/ /g, '').toLowerCase()
  return newStr.split('').reverse().join('') === newStr ? true : false
}

console.log(isPalindrome('racecar'))

//Palindrom : okunuşu ile tersten okunuşu aynı olan sözcüklere denir. kepek,küçük,kazak,mum vb.

/* function Palindrom(text) {
     let splitted = text.split("")
     let reversed = text.split("").reverse()

     if (splitted.join("") === reversed.join("")){
        console.log(`${text} bir palindromdur.`);
     }else {
        console.log(`${text} bir palindrom değildir.`);
     }
}

Palindrom("kazak") */
