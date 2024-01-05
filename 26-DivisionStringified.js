/* DIVISION STRINGIFIED
Using the Javascript language, have the function DivisionStringified(num1, num2) take both parameters being passed, divide num1 by num2, and return the result as a string with properly formatted commas.If an answer is only 3 digits long.

return the number with no commas (ie. 2 / 3 should output "1").

for example:
if num1 is 123456789 and num2 is 10000 the output should be 12,345
length string ve arraylerde ve objelerde kullanılır numberlarda kullanılmaz
*/

const DivisionStringified = (n1, n2) => {
  //UZUN METOD
  /* const division = Math.floor(n1 / n2).toString()
  if (division.length < 4) return division
  const divisionArr = division.split('')
  const backwordsArr = division.split('').reverse() //arrayi terse çevirdik

  let arr = []
  let j = 0
  for (let i = 0; i < backwordsArr.length; i++) {
    //döngü sıfırdan başladığı için 0 === 0 olursa döngünün başına virgül atmış oluruz o yüzden döngüyü != 0 ile kontrol edicez
    if (j != 0 && j % 3 === 0) {
      arr.push(backwordsArr[i] + ',')
    } else {
      arr.push(backwordsArr[i])
    }
    j++
  }
  return arr.reverse().join('') */

  //KISA METOD
  return Math.floor(n1 / n2)
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

console.log(DivisionStringified(123456789, 10000))
