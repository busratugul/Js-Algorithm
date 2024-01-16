/* DASH INSERT
Using the javascript languagei have the funciton DashInsert(str) insert dashes ("-") between each two odd numbers in str.For example: if str is 454793 the output should be 4547-9-3.Don't count zero as an odd number.
*/

const DashInsert = (str) => {
  let newArr = []

  for (let i = 0; i < str.length; i++) {
    if (/[^1-9]/.test(str[i])) {
      newArr.push(str[i])
    } else {
      if (
        str[i] % 2 != 0 &&
        str[i + 1] % 2 != 0 &&
        str[i + 1] != undefined &&
        /[1-9]/.test(str[i + 1])
      ) {
        newArr.push(str[i] + '-')
      } else {
        newArr.push(str[i])
      }
    }
  }

  return newArr.join('')
}

console.log(DashInsert('454793c31'))
