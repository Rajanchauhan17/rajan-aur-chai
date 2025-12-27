const score=100
// console.log(score)

const balance=new Number(100)
// console.log(balance)
// console.log(typeof(balance))

// console.log(balance.toString().length)
// console.log(balance.toFixed(2))


const otherNumber=1123.8966
// console.log(otherNumber.toPrecision(3)) //if otherNumber value = 23.8966 and otherNumber.toPrecision(3) then o/p is  23.9 // if otherNumber value = 123.8966 and otherNumber.toPrecision(3) then o/p is  124//if otherNumber value = 1123.8966 and otherNumber.toPrecision(3) then o/p is 1.12e+3


const hundreds =1000000
// console.log(hundreds.toLocaleString()) //o/p is 10,00,000

// ************************ Maths  ****************************

// console.log(Math.abs(-5)) // always provide positive value 
// console.log(Math.round(4.4))  
// console.log(Math.round(4.6))  
// console.log(Math.ceil(4.2))  //o/p is 5
// console.log(Math.floor(4.8))  //o/p is 4

// console.log(Math.min(1,5,3,8))  
// console.log(Math.max(1,5,3,))  


console.log(Math.random()) // give value in between 0-1 
console.log((Math.random()*10) + 1)
console.log(Math.floor((Math.random()*10) + 1))



const min = 10
const max = 20

console.log(Math.floor((Math.random() * (max-min + 1)) + min))




