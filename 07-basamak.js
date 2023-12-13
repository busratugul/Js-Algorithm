//Girdiğimi sayının kaç basamaklı olduğunu bulma algoritması

let sayi = 12234152344
let adet = 0

while (sayi !== 0) {
    sayi = Math.floor(sayi / 10)
    adet ++
}

console.log("basamak sayısı", adet)