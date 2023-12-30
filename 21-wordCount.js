/* Word Count
Using the javascript language, have the function wordCount(str) take the str string parameter being passed and return the number of words the string contains (ie. "Never eat shredded wheat" would return 4). Words will be seperated by single spaces.
*/

const wordCount = (str) => {
  return  str.trim().split(" ").length
}

console.log(wordCount(" Never eat shredded wheat "))