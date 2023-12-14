//Binary search(ikili arama uygulaması) aradığımız sayının bir array içinde kaçıncı indekste olduğunu sağlı sollu arama ile bulmak.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
let x = 0
let arrLength = arr.length - 1

const binarySearch = (number) => {
  while (x <= arrLength) {
    const y = Math.floor(x + (arrLength - x) / 2)
    //dizinin ortasındaki indeksi hesapladık
    if (arr[y] === number) {
      return y
    }
    if (arr[y] < number) {
      //ortadaki eleman aranandan küçükse arama sağa kayar
      x = y + 1
    } else {
      //ortadaki eleman aranandan büyükse arama sola kayar
      arrLength = y - 1
    }
  }
  //sayı bulunamazsa -1 döner
  return -1
}

console.log(binarySearch(7))
