let myDate = new Date()
// console.log(myDate) // 2025-12-26T13:14:37.226Z

// console.log(myDate.toString()) // Fri Dec 26 2025 18:44:37 GMT+0530 (India Standard Time)
// console.log(myDate.toISOString()) // 2025-12-26T13:14:37.226Z
// console.log(myDate.toLocaleDateString()) // 26/12/2025
// console.log(myDate.toDateString()) // Fri Dec 26 2025
// console.log(myDate.toJSON())  //2025-12-26T13:14:37.226Z
// console.log(myDate.toTimeString()) //18:44:37 GMT+0530 (India Standard Time)
// console.log(myDate.toUTCString()) //Fri, 26 Dec 2025 13:14:37 GMT



let myCreateDate=new Date(2025,0,23,15,3)
// console.log(myCreateDate.toLocaleString())

let myTimeStamp = Date.now()

// console.log(myTimeStamp)
// console.log(myCreateDate.getTime())

// console.log(Math.floor(Date.now()/1000)) // covert time into secconds


let newDate = new Date()
console.log(newDate)
console.log(newDate.getSeconds())
console.log(newDate.getDay())
console.log(newDate.getFullYear())
console.log(newDate.getMonth() + 1)

// console.log(`${newDate.getDay()}:${newDate.getMonth() + 1}:${newDate.getFullYear()}`)


newDate.toLocaleString('default',{
    weekday: 'long'
})