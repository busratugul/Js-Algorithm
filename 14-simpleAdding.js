/* Simple Adding
Verilen tam sayıya kadar olan değerlerin toplanması(verilen tam sayı da dahil)
*/

const simpleAdding = (num) => {
    let result = 0
    for(let i = 1; i <= num; i++) {
        result = result + i
    }
    return result
}

console.log(simpleAdding(4));