/* Time Convert
Using the javascript language, have the function TimeConvert(num) take the num parameter being passed and return the number of hours and minutes the parameter converts to (ie. if num = 63 then the output should be 1:3) Seperate the number of hours and minutes with a color.
*/

const TimeConvert = (num) => {
  /* const min = num % 60
    const hour = Math.floor(num / 60)

    return hour + " : " + min */

  return `${Math.floor(num / 60)} : ${num % 60}`
}

console.log(TimeConvert(63))
