/*First Factorial
Using the Javascript language, have the function firstFactorial(num) take the num parameter being passed and return the factorial of it(ie. If num = 4, return (4*3*2*1)). For the cases, the range will be betweeb 1 and 10. 
*/

//First
const firstFactorial = (num) => {
  let factorial = 1 //0 ve 1 de 1 döner
  for (let i = 2; i <= num; i++) {
    //console.log(i);
    factorial *= i
  }
  return factorial
}

console.log(firstFactorial(8))

//Second
/* function faktoriyel(num) {
    if(num === 0 || num === 1){
        return 1;
    }else {
       return num * faktoriyel(num - 1)
    }
}

console.log(faktoriyel(8)) */
