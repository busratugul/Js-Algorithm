/* 
Using the Jacascript, have the function letterChange(str) take the str parameter being passed and modify It using the following algorithm.

Replace evert letter in the string with the letter following it in the alphabet.(ie. c becomes d, z becomes a)

Then capitalize every vowel in this new string(a,e,o,u,i) and finally return this modified string.
*/

const letterChange = (str) => {
    //1- js charcode ve charcodeAt metotlarını kullanacağımız için ilk önce string içerisindeki harfleri toLowerCase metodu ile küçük harfe çevir.
    //console.log(String.fromCharCode("A".charCodeAt() + 1)); bir sonraki harfe ulaşma şekli
    //2- replace metodu ile harfleri tarıyoruz ve ilk olarak eğer z varsa bu değeri hemen a ile değiştiririz. Eğer harfimiz z değilse String, fromCharCode(codedan harfe cevirir) ve char.charcodeAt() kullanarak alfabedeki bir sonraki harf ile bu değeri değiştiriyoruz.
    const newStr = str.toLowerCase().replace(/[a-z]/gi, 
    (char) => {
        if( char === "z"){
            return "a"
        }else {
            return String.fromCharCode(char.charCodeAt() + 1)
        }
    })

    //3- Sesli harfleri büyük harfe çeviriyoruz. Ve değeri return ediyoruz.
    let vowelCapitalize = newStr.replace(/a|e|i|o|u/gi,char => char.toUpperCase())
    return vowelCapitalize
}

console.log(letterChange("Hello"));