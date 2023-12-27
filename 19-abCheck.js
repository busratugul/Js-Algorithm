/* AB CHECK
Using the Javascript language, have function ABCheck(str) take the str parameter being passed and return the string true if the characters a and b are seperated by exactly 3 places anywhere in the string at least once

(ie. "lane borrowed" would result in true because there is exactly three characters between a and b).
Otherwise return the string false.
*/

const abCheck = (str) => {
  /* let control = []
  const arr = str.toLowerCase().split('')
  arr.forEach((char) => {
    if (char === 'a' && arr[arr.indexOf(char) + 4] === 'b') {
      control.push(true)
    }
  })
  return control.includes(true) ? true : false */

  //search() karakter aratır ve bulursa stringi döner bulamazsa -1 döner eğer aradaki karakterlerin bir önemi yoksa nokta koyabiliriz.

  return str.search("a...b") > -1 ? true : false

}

console.log(abCheck('lane borrowed'))
