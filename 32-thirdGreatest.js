/* 
THIRD GREATEST
using the javascript language, have the function thirdGreates(strArr) take the array of strings in strArr and return the third largest word within in.

So for example:
if strArr is ["hello", "world", "before", "all"] your output should b world because "before" is 6 letters long, and "hello" and "world" are both 5, but the output should be world because it appeared as the last 5 letters word in the array.

If strArr was ["hello", "world", "after", "all"] the output should be after because the first three words are all 5 letters long, so return the last one. The array will have at least three strings and each string will only contain letters.
*/

const thirdGreatest = (strArr) => {
  /* WAY 1
    arr.sort((a,b) => b.length - a.length)
    return arr[2] 
    Aynı karakter sayısı oldugunda yanlıs sonuc verir*/

  longest = ''
  second = ''
  third = ''
  for (idx in strArr) {
    current = strArr[idx]
    if (current.length > longest.length) {
      third = second
      second = longest
      longest = current
    } else if (current.length > second.length) {
      third = second
      second = current
    } else if (current.length >= third.length) {
      third = current
    }
  }
  return third
}

console.log(thirdGreatest(['hello', 'world', 'after', 'all']))
