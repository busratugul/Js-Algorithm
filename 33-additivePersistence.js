/* 
ADDITIVE PERSISTENCE
Using the javascript language, have the function additivePersistence(num) take the num parameter being passed which will always be a positive integer and return its additive persistence which is the number of times you must add the digits in num untik you reach a single digit.

for example:
if num is 2718 then your program should return 2

because 2 + 7 + 1 + 8 = 18 and 1 + 8 = 9 and you stop at 9.
*/

const additivePersistence = (num) => {
  //eğer verilen parametre bir rakamsa 0 dön
  if (num < 10) return 0
  //eğer verilen parametre bir rakam değilse basamakları topla
  let sumOfDigits = sum(num)
  let additivePersistence = 1 //rakamların toplamı tek bir rakam olana kadar yapmamız gereken toplama işlemi bizden istenendir yani steps (1 verme sebebimiz cunku zaten rakamsa direkt 0 döenecek yani 1. kontrol her zaman yapılıyor)

  while (sumOfDigits > 9) {
    additivePersistence++
    sumOfDigits = sum(sumOfDigits)
  }
  /*  return "additivePersistence:" + additivePersistence +"   sumOfDigits: " + sumOfDigits */
  return additivePersistence
}

//birden çok toplama yapılabileceği için toplamayı bir function olarak yazarız
function sum(n) {
  let sum = 0
  const arr = n.toString().split('')
  for (i = 0; i < arr.length; i++) {
    sum += parseInt(arr[i])
  }
  return sum
}

console.log(additivePersistence(271856))
