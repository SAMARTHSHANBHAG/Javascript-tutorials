// Dates

let myDate = new Date()
console.log(myDate.toString()); // Tue Dec 24 2024 00:41:02 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); // Tue Dec 24 2024
console.log(myDate.toLocaleString()); // 24/12/2024, 12:42:11 am
console.log(typeof myDate); //object

let myCreatedDate = new Date(2023, 0, 3)
// console.log(myCreatedDate.toDateString());
let myCreatedDate1 = new Date(2023, 0, 3, 5, 4)
// console.log(myCreatedDate1.toLocaleString());
let myCreatedDate2 = new Date("2023-12-7")
// console.log(myCreatedDate2.toLocaleString());
let myCreatedDate3 = new Date("01-14-2023")
// console.log(myCreatedDate3.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDay());
// console.log(newDate.getMonth() + 1);

// newDate.toLocaleString('default', {
//     weekday: "long"
// })






