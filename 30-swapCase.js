//küçük harfleri büyük, büyük harfleri küçük yapma algoritması
const swapCase = (str) => {
  let newArr = []
  str.split('').forEach((element) => {
    if (/[^a-zA-Z]/.test(element)) {
      newArr.push(element)
    } else if (/[a-z]/.test(element)) {
      newArr.push(element.toUpperCase())
    } else if (/[A-Z]/.test(element)) {
      newArr.push(element.toLowerCase())
    }
  })
  return newArr.join('')
}

console.log(swapCase('Hello World'))
