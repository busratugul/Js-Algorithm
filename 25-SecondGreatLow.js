/* SECOND GREAT LOW
Using the Javascript language, have the function SecondGreatLow(arr) take the array of numbers stored in arr and return the second lowest and second greates number, respectively, seperated by a space.

For example: If arr contains [7, 7, 12, 98, 106]
The array will not be empty and will contain at least 2 numbers.
It can get tricky if there's just two numbers.
*/

const SecondGreatLow = (arr) => {
  //aynı olan değerlerin birinden kurtul
  let newArr = []
  arr.forEach((num) => {
    !newArr.includes(num) && newArr.push(num)
  })
  //küçükten büyüğe sırala
  newArr.sort((a, b) => a - b)
  //en büyük ikinci ve en küçük ikinci değeri almak
  if (newArr.length === 2) {
    return newArr[0] + '-' + newArr[1]
  } else {
    return newArr[1] + '-' + newArr[newArr.length - 2]
  }
}

console.log(SecondGreatLow([3, 7, 98, 12, 7, 106, 125]))
