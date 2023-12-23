/* Simple Symbols
Using the Javascript language, have the function simpleSymbols(str) take the str parameter being passed and determine if it is an acceptable sequence bt either returning the string true or false.

The str parameter will be composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol.

So the string to the left would be false.

The string will not be empty and will have at least one letter.
harflerin sağında ve solunda + olmalı.
*/

const simpleSymbols = (str) => {
  const arr = str.split('')
  let controlArr = []

  arr.forEach((char) => {
    if (/[a-zA-Z]/.test(char)) {
      //console.log(char);
      if (
        arr[arr.indexOf(char) - 1] === '+' &&
        arr[arr.indexOf(char) + 1] === '+'
      ) {
        controlArr.push(1)
      } else {
        controlArr.push(0)
      }
    }
  })
  console.log(controlArr)
  if (controlArr.includes(0)) {
    return false
  } else {
    return true
  }
}

console.log(simpleSymbols('++d+===+c++==a+'))

/* function simpleSymbols(str) {
    const arr = str.toLowerCase().split("")
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] >= "a" && arr[i] <= "z"){
            if(i === 0 || i === arr.length){
                return false
            }
        if (arr[i - 1] !== "+" || arr[i + 1] !== "+"){
            return false
        }
    }
}
return true
} */
