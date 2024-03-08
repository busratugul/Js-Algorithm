/* 
Multiplicative Persistance
rakamların birbirleri ile çarpımlarının tek rakam oluncaya kadar tekrarlanması gereken çarpma işleminin sayısıdır.
 örneğin:
39--1--27--2--14--3--4               
yani
1- 3x9 = 27
2- 2x7 = 14
3- 1x4 = 4
*/

const multiplicativePersistance = (num) => {
  if (num < 10) return 0

  let result = multiply(num)
  let multiplicativePersistance = 1

  while (result > 9) {
    multiplicativePersistance++
    result = multiply(result)
  }

  return multiplicativePersistance
}

function multiply(num) {
  const arr = num.toString().split('')
  let multiply = 1

  for (let i = 0; i < arr.length; i++) {
    multiply *= arr[i]
  }
  return multiply
}

console.log(multiplicativePersistance(39))
