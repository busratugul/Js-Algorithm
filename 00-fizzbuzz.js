/* Sadece 3üz katları "Fizz"
Sadece 5'in katları "Buzz"
15in katları "FizzBuzz" */

//Kullanıcıdan bir number alıyoruz oraya kadar fizzbuzz oynayacağız.
//window.prompt("Lütfen bir sayı giriniz?")

function game(number) {
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz')
    } else if (i % 5 === 0) {
      console.log('Buzz')
    } else if (i % 3 === 0) {
      console.log('Fizz')
    }else {
        console.log(i);
    }
  }
}

game(100)
