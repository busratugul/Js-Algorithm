/* Ex Oh
Using the javascript language, have the function ExOh(str) taje the str parameter being passed and return the string true if there is an equal number of x's and o's, otherwise return the string false

Only these two letters will be entered in the string, no punctutation or numbers.
For example: if str is "xooxxxxooxo" then the output should return false because there are 6 x's and 5 o's.
*/

const ExOh = (str) => {
  let x = 0
  let o = 0
  ;[...str].forEach((item) => {
    item === 'x' ? (x += 1) : (o += 1)
  })
  return x === o ? true : false
}

console.log(ExOh('xooxxxxoxoo'))
