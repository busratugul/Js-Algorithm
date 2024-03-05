/* 
Number Addition
Using the javascript language, have the function numberSearch(str) take the str parameter, search for all the numbers in the string, add them together, then return that final number.

For example: if str is "88Hello 3World!" the output should be 91.

8+8+3 = 19
88+3 = 91
 you will have to differentiate between single digit numbers and multiple digit numbers like in the example above.

 So "55Hello" = 55
 and
 "5Hello 5" = 10

 should return two different answers.
 Each string will contain at least one letter or symbol
*/

const numberAddition = (str) => {
  const strArr = str.split('')
  let numberArr = []

  for (let i = 0; i < strArr.length; i++) {
    let lastI = numberArr.length - 1

    if (/[^0-9]/.test(strArr[i])) {
      numberArr.push(strArr[i])
    } else {
      //döngüdeki karakter eğer rakam ise
      if (numberArr.length === 0) {
        numberArr.push(strArr[i])
      } else if (/[0-9]/.test(numberArr[lastI])) {
        //array boş değil ve arrayin içindeki son değer rakam ise ikisini birleştir
        numberArr[lastI] = numberArr[lastI] + strArr[i]
      } else if (/[^0-9]/.test(numberArr[lastI])) {
        //eğer array boş değilse ve son karakter rakam değilse
        numberArr.push(strArr[i])
      }
    }
  }
  return calculateSum(numberArr)
}

const calculateSum = (arr) => {
  let sum = 0

  for (let j = 0; j < arr.length; j++) {
    if (arr[j].match(/\d+/)) {
      sum += parseInt(arr[j])
    }
  }
  return sum
}

console.log(numberAddition('88Hello 3World!'))
