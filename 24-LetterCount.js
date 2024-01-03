/* Letter Count
Have the function LetterCount(str) take the parameter being passed and return the first the word with the gratest number of repeated letters.

For example: "Today, is the greatest the ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's.

If there are no words with repeating letters return <b>-1</b>.
Words will be seperates by spaces.
*/

const letterCount = (str) => {
  //harf dışındaki tüm karakterlerin silinmesi
  //stringi küçük harfe dönüştür
  //stringi array yap
  const arr = str
    .replace(/[^a-zA-Z ]/g, '')
    .toLowerCase()
    .split(' ')
  let kelime_nesneleri = []
  for (let i = 0; i < arr.length; i++) {
    let obj = {}
    arr[i].split('').forEach((char) => {
      char in obj ? (obj[char] += 1) : (obj[char] = 1)
    })
    kelime_nesneleri.push(obj)
  }
  let maxFraquencies = []
  //objelerin valuesini almamız lazım
  kelime_nesneleri.forEach((nesne) => {
    maxFraquencies.push(Math.max(...Object.values(nesne)))
  })
  let maxValue = Math.max(...maxFraquencies)
  return maxValue < 2
    ? -1
    : arr[maxFraquencies.indexOf(maxValue)]
    ? arr[maxFraquencies.indexOf(maxValue)]
    : -1
}

/* "%c" +  */ letterCount(
  'Today, is the greatest the ever!'
) /* , "font-size:60px" */

console.log(letterCount('Today, is the greatest the ever!'))
