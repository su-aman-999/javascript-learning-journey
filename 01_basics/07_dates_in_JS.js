/*>>===:::Dates:::===>*/
let myDate = new Date();
console.log(myDate); //=> 2025-12-11T09:16:20.110Z

console.log(myDate.toString()); //=> Thu Dec 11 2025 14:47:05 GMT+0530 (India Standard Time)

console.log(myDate.toDateString()); //=> Thu Dec 11 2025

console.log(myDate.toLocaleTimeString()); //=> 3:02:04 PM

console.log(myDate.toISOString()); //=> 2025-12-11T09:20:08.875Z

console.log(myDate.toJSON()); //=> 2025-12-11T09:21:10.261Z

console.log(myDate.toLocaleString()); //=> 12/11/2025, 2:52:26 PM

console.log(myDate.toLocaleDateString()); //=> 12/11/2025

console.log(myDate.toLocaleTimeString()); //=> 3:00:50 PM

console.log(typeof myDate); //=> Object

/* >>--:::Specific Date:::-->> */

// <-::: Way- 1 :::->
let newDate1 = new Date(2025, 11, 11); //-> months start from 0
console.log(newDate1.toString()); //=> Thu Dec 11 2025 00:00:00 GMT+0530 (India Standard Time)
console.log(newDate1.toLocaleString()); //=> 12/11/2025, 12:00:00 AM

// <-::: Way-2 :::->
let newDate2 = new Date(2025, 11, 11, 3, 19);
console.log(newDate2.toString()); //=> Thu Dec 11 2025 03:19:00 GMT+0530 (India Standard Time)
console.log(newDate2.toLocaleString()); //=> 12/11/2025, 3:19:00 AM

// <-:::Way-3 :::->
let newDate3 = new Date("2025-12-11"); //-> yy-mm-dd, months start from 1
console.log(newDate3.toLocaleString());

// <-:::Way-4 :::->
let newDate4 = new Date("12-11-2025"); //-> mm-dd-yy, months start from 1
console.log(newDate4.toLocaleString());

/* >>--:::Time Stamps:::-->> */

let nowTime = Date.now();
console.log(nowTime); //=> 1765447007796
console.log(newDate3.getTime()); //=> 1765411200000
console.log(Math.floor(Date.now() / 1000 / 60 / 24));

let tempDate = new Date();
console.log(tempDate.getMonth()); //=> return month-1 (from 0)
console.log(tempDate.getDay()); //=> 4 -> Thursday
console.log(tempDate.getDate()); //=> 11 -> day
console.log(tempDate.getHours()); //=> 15 -> hours
console.log(tempDate.getMinutes()); //=> 35 -> min
console.log(tempDate.getFullYear()); //=> 2025 -> year

console.log(
  `Date: ${tempDate.getDate()}|${
    tempDate.getMonth() + 1
  }|${tempDate.getFullYear()} -> Time: ${
    tempDate.getHours() % 12
  }:${tempDate.getMinutes()}pm`
); //=> Date: 11|12|2025 -> Time: 3:45pm


