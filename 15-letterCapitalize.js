/* Letter Capitalize

Using the Javascript language, have the function letterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word.

Words will be separated by only one space!!!

*/

const letterCapitalize = (str) => {
  const newStr = []
  str.split(' ').forEach((word) => {
    newStr.push(word.charAt(0).toUpperCase() + word.slice(1, word.length))
  })
  return newStr.join(' ')
}

console.log(
  letterCapitalize(
    'bugün hava kar yağışlı diye söylendi ama hava tam aksine çok güneşli'
  )
)
