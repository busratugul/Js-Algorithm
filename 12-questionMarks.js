/* Question Marks
Have the function questionMarks(str) take the str string parameter. Which will the contain single digit numbers, letters and question marks and check if there are exactly 3 question marks between every pair of two numbers that add up to 10. If so, then your program should return the string true, otherwise It should return the false. If there aren't any to numbers that add up to 10 in the string, then your program should return false as well.

for example: If str is "arrb6???4xxb15???eee5" than your program should return true because there are exactly 3 question marks between 6 and 4, and 3 question marks between 5 and 5 at the end of the string.

*/

const questionMarks = (str) => {
  //1- str.length >= 5 kontrol et. 3 soru işareti artı 2 değer
  if (str.length < 5) {
    return false
  }

  //2- rakam veya soru işareti olmayan bütün değerleri sil.
  const newStr = str.replace(/[^0-9?]/g, '')

  //3- forEach için stringi arraye çevir.
  const arr = newStr.split('')

  //4- forEach içinde kullanılacak değişkenleri tanımla(sums, sum, iterator)
  let sums = [] //değerlerin toplamını tutan array
  let sum = 0 //kod okunabilirliği açısından lazım
  let iterator = 0 //forEachte karakterler sağa doğru giderken karakterin index takibini yapacak değişken

  //5- forEach döngüsü ile her bir rakam ve kendisinden sonraki 4.karakterin toplanarak sum değişkenine eşitlenmesi ve sonra da by değerin sums arrayine eklenmesi
  arr.forEach((item) => {
    if (item != '?') {
      sum = parseInt(item) + parseInt(arr[iterator + 4])
      sums.push(sum)
    }
    iterator += 1
  })
  //console.log(sums); [ 10, NaN, NaN, 10, NaN ]
  //console.log(newStr) 6???415???5

  //6- sums arrayi içinde 10 değeri varsa true, yoksa false dönmesi
  return sums.includes(10) ? true : false
}

console.log(questionMarks('arrb6???4xxb15???eee5'))
