/* Longest Word

- Using the Javascript language, have the function longestWord(sen) take the sen parameter being passed return the largest word in the string.
- If there are two or more words that are the same length, return the first word from string with that length.
- Ignore punctutaion and assume sen will not be empty.
*/

// 1- Noktalama işaretlerini kaldır.
// 2- Cümleyi boşluklardan bölüp, kelimelerle bir array oluştur.
const longestWord = (sen) => {
  //bu regex bir metinden tüm yabancı ifadeleri(harf olmayan) kaldırıp yerine boşluk koymak için kullanılır.
  const arr = sen.replace(/[^a-zA-Z ]/g, '').split(' ')
  // 3- Kelimelerle oluşan arrayi kelimelerin karakter sayılarına göre azalan bir şekilde sırala.
  arr.sort((a, b) => {
    return b.length - a.length
  })
  // 4- En baştaki 0.indeksteki (karakter sayısı en yüksek olan) kelimeyi return et.
  return arr[0]
}

console.log(longestWord('fun&!! time'))
