/* Counting Minutes
Using the javascript language, have the function CountingMinutes(str) take the str parameter being passed which will be two times (each properly formatted fullWidth a colon and am or pm) seperated by hyphen and return the total number of minutes between the two times.

The time will be in a 12 hour clock format.
for example:
if str is 9:00am-10:00am then the output should be 60.

if str is 1:00pm-11:00am
the output should be 1320.

A.M. = Ante Meridiem -> Öğleden Önce
P.M = Post Meridiem -> Öğleden Sonra
*/

const CountingMinutes = (time) => {
  const times = time.split('-')
  let time1 = {}
  let time2 = {}

  time1.meridiem = times[0].slice(-2)
  time1.hour = parseInt(times[0].split(':')[0])
  time1.minute = parseInt(times[0].slice(-4, -2))
  //{ meridiem: 'am', hour: 9, minute: 0 }

  time2.meridiem = times[1].slice(-2)
  time2.hour = parseInt(times[1].split(':')[0])
  time2.minute = parseInt(times[1].slice(-4, -2))
  //{ meridiem: 'am', hour: 10, minute: 0 }

  let minutes = 0
  let result = 0
  if (time1.meridiem === time2.meridiem) {
    minutes = time2.hour * 60 + time2.minute - (time1.hour * 60 + time1.minute)
    result = minutes > 0 ? minutes : 24 * 60 + minutes
  } else {
    minutes = time2.hour * 60 + time2.minute - (time1.hour * 60 + time1.minute)
    result = 12 * 60 + minutes
  }
  return result
}

console.log(CountingMinutes('1:00pm-11:30pm'))
//9:00am-10:00am
// 10:00am-9:00am = -60 = 24*60 - 60 = 1380dk 23sa
//12pm-12am arası 12 saattir saatler aynı meridienler farklı ancak rakamlar değişirse minutesi ya ekleriz ya çıkartırız ama 12 saat sabittir.
//