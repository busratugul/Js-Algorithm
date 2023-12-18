
/* 
Have the function findIntersection(arr) read the array of strings stored in strArr which will contain 2 elements: the first element will represent a list of comma-separated sorted in ascending order. The second element will represent a second list of comma-separated numbers (also sorted). Your goal is return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. If there is no intersectiın, return the string false. 
Kısaca: Aynı olan(kesişen karakterleri bize ver, yoksa false dön
*/

const findIntersection = (arr) => {
    //1- kesişenler için yeni bir array tipinde değişken tanımla
    let intersection = []

    //2- split(),replace()
    const set1 = arr[0].replace([/\s/g,""]).split(",")//tüm boşlukları yok etme regexi
    const set2 = arr[1].replace([/\s/g,""]).split(",")

    //3- forEach() ile bütün array içindeki karakterleri diğer içinde olup olmadığını kontrol edeceğiz varsa tanımladığımız yeni array değişkeni içine bu değerleri atacağız.Bize soruda kume2deki elemanlar kume1de var mı dediği için set2yi forEach ile döneceğiz.
    set2.forEach((item) => {
        if(set1.includes(item)) {
            intersection.push(item)
        }
    })

    //4- Eğer tanımladığımız array boş ise return false, boş değilse array içindeki değerleri string hali ile return edeceğiz.
    if(intersection.length != 0) {
        return intersection.toString()
    }else {
        return false
    }
}//["1, 3, 4, 7, 13", " 1, 2, 4, 13, 15"] bize verilen arr

console.log(findIntersection([" 1, 3, 4, 7, 13 ", " 1, 2, 4, 13, 15 "]))