/* Rules
1- The username is between 4 and 25 characters.
2- It must start with a letter.
3- It can only contain letters, numbers and the underscore character.
4- It cannot end with an underscore character.

If the username is valid then your program should return the string true.


testUsername = u__hello_world123
*/

const userValidation = (str) => {
  if (
    str.length >= 4 &&
    str.length <= 25 &&
    //ilk karakterin harf olup olmadığını kontrol etmek için regular expression(regex) kullandık.
    /[a-zA-Z]/.test(str.slice(0, 1)) && //str.charAt(0)
    //tüm küçük büyük harfler,9 tane rakam ve altçizgi olmasına izin veren regex
    /^\w+$/.test(str) &&
    /^[a-zA-Z0-9]+$/g.test(str.slice(-1))
  ) {
    return true
  } else {
    return false
  }
}

console.log(userValidation('u__hello_world123'))
