//Integer Reversal (tam sayıyı tersine çevirme)
//15 => 51, 50 => 5, -30=> -3, -420 => -24

function reverseInt(n) {
  //reverse() tersine çevirir
  let reversed = n.toString().split('').reverse().join('')
  console.log(typeof reversed)
  console.log(parseInt(reversed) * Math.sign(n))
  //Math.sign() içine aldığı sayının işaretini döndürür.
}
reverseInt(-50)
