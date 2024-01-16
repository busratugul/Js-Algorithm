/* MEANMODE
have the function MeanMode(arr) take the array of numbers stored in arr and return. If the mode equals the mean, 0 if they don't equal easch other (ie. [5, 3, 3, 3, 1] should return 1 because the mode(3) equals the mean(3)). The array will not be empty, will only contain positive integers, and will not contain more than one mode.
*/

function MeanMode(arr) {
  const mean = calculateMean(arr)
  const mode = calculateMode(arr)
  return mean === mode ? 1 : 0
}

//ortalama hesaplama
const calculateMean = (arr) => {
  let sum = 0
  for (let index = 0; index < arr.length; index++) {
    sum += arr[index]
  }
  return sum / arr.length
}

//mode hesaplama
const calculateMode = (arr) => {
  //arrayin frekansları ile eşleşen bir obje oluştur
  //{eleman:array içerisindeki tekrar} {3:5, 5:1 , 1:1}
  //en buyuk değeri max'a ata
  //frekansı en yuksek olan elemanı döndür
  let freq = {}
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] in freq) {
      freq[arr[j]] = freq[arr[j]] + 1
    } else {
      freq[arr[j]] = 1
    }
  }
  const max = Math.max(...Object.values(freq))
  return iterateOverObj(freq, max)
}

const iterateOverObj = (freq, max) => {
  //max değeri dönen objeye ulaşma
  for (let j in freq) {
    if (freq[j] === max) {
      return parseInt(j)
    }
  }
}

console.log(MeanMode([5, 3, 3, 3, 1]))
