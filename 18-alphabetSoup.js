/* Alphabet Soup
Have the function AlphabetSoup(str) take the strşng paramter being passed and return the string with the letters in alphabetical order ( ie. hello becomes ehllo)

Assume numbers and punctutaion symbols will not be includes in the string.

sort() metodu array sıralar, üzerinde kullanılan arrayi tamamen değiştirir.
*/

const AlphabetSoup = (str) => {
  /*  const arr = str.split("")
    const sortedArr = arr.sort()
    const newStr = sortedArr.join("")
    return newStr */

  return str.split('').sort().join('')
}

console.log(AlphabetSoup('hello'))
